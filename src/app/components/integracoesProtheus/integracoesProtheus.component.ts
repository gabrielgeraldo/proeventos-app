import { Component, OnInit } from '@angular/core';
import { EmpresasProtheus } from '../../models/EmpresasProtheus';

@Component({
  selector: 'app-integracoesProtheus',
  templateUrl: './integracoesProtheus.component.html',
  styleUrls: ['./integracoesProtheus.component.scss']
})
export class IntegracoesProtheusComponent implements OnInit {

  public empresas: EmpresasProtheus[] = [];

  constructor() { }

  ngOnInit() {
  }

}
