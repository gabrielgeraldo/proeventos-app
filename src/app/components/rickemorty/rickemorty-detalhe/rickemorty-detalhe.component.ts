import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Personagem } from '@app/models/Personagem';
import { PersonagemService } from '@app/services/personagem.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rickemorty-detalhe',
  templateUrl: './rickemorty-detalhe.component.html',
  styleUrls: ['./rickemorty-detalhe.component.scss']
})
export class RickemortyDetalheComponent implements OnInit {

  personagem = {} as Personagem;

  constructor(
    private fb: FormBuilder,
    private router: ActivatedRoute,
    private personagemService: PersonagemService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService)
{
// this.localeService.use('pt-br');
}

  ngOnInit(): void {
    this.carregarPersonagens();
  }

  public carregarPersonagens(): void {

    const eventoIdParam = this.router.snapshot.paramMap.get('id');

    if (eventoIdParam !== null) {
      this.spinner.show();

      this.personagemService.getPersonagemById(+eventoIdParam).subscribe(
        (personagem: Personagem) => {
          this.personagem = {...personagem};
        },
        (error: any) => {
          this.spinner.hide();
          this.toastr.error('Erro ao tentar carregar Personagem.', 'Erro!');
          console.error(error);
        },
        () => this.spinner.hide(),
      );
    }

  }

}
