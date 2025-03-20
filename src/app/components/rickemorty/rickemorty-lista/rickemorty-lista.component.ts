import { HttpClient } from '@angular/common/http';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { Personagem } from '@app/models/Personagem';
import { PersonagemService } from '@app/services/personagem.service';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rickemorty-lista',
  templateUrl: './rickemorty-lista.component.html',
  styleUrls: ['./rickemorty-lista.component.scss']
})
export class RickemortyListaComponent implements OnInit {

  public personagens: Personagem[] = [];
  public personagensFiltrados: Personagem[] = [];


  public larguraImagem = 150;
  public margemImagem = 2;
  public exibirImagem = true;

  // tslint:disable-next-line:variable-name
  private _filtroLista = '';

  modalRef: BsModalRef;

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(value: string) {
    this._filtroLista = value;
    this.personagensFiltrados = this.filtroLista ? this.filtrarEventos(this.filtroLista) : this.personagens;
  }

  public filtrarEventos(filtrarPor: string): Personagem[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.personagens.filter(
      personagem => personagem.species.toLocaleLowerCase().indexOf(filtrarPor) !== -1 ||
      personagem.name.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  constructor(
    private http: HttpClient,
    private personagemService: PersonagemService,
    private modalService: BsModalService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService) {

  }
  ngOnInit(): void {
    this.getPersonagens();
  }

  // tslint:disable-next-line:typedef
  public alterarImagem() {
    this.exibirImagem = !this.exibirImagem;
  }

  public getPersonagens(): void {

    this.personagemService.getPersonagens().subscribe({
      next: (personagens: Personagem[]) => {
        this.personagens = personagens;
        this.personagensFiltrados = this.personagens;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastr.error('Erro ao Carregar os Personagens', 'Erro!');
      },
      complete: () => this.spinner.hide()
    });

  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirm(): void {
    this.modalRef.hide();
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  decline(): void {
    this.modalRef.hide();
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  detalhePersonagem(id: number): void{
    this.router.navigate([`rickemorty/detalhe/${id}`]);
  }

}
