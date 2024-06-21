import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent {

  entidades: string[] = ['GEPE - GRUPO ESPÍRITA PAULO E ESTEVÃO - AGUA FRIA'];
  projetos: string[] = ['PROJETO MICRO GERAÇÃO (ATÉ 275 kW)'];
  tipos: string[] = ['DEBITO','CREDITO'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  listEntidades = new Array<SelectModel>();
  entidadeSelect = new SelectModel();


  listProjetos = new Array<SelectModel>();
  projetoSelect = new SelectModel();

  movimentacaoForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 5;

    this.movimentacaoForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]],
          tipo: ['', [Validators.required]],
          projeto: ['', [Validators.required]],
          entidade: ['', [Validators.required]],
          valor: ['', [Validators.required]],
          data: ['', [Validators.required]],
          entidadeSelect: ['', [Validators.required]],
          projetoSelect: ['', [Validators.required]],
        }
      )
  }


  dadorForm() {
    return this.movimentacaoForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }



}
