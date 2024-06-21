import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent {

  entidades: string[] = ['GEPE - GRUPO ESPÍRITA PAULO E ESTEVÃO - AGUA FRIA'];
  tipos: string[] = ['RESIDENCIAL','COMERCIAL'];
  status: string[] = ['ABERTA','ANDAMENTO','CANCELADA','FECHADA'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  listEntidades = new Array<SelectModel>();
  entidadeSelect = new SelectModel();


  listProjetos = new Array<SelectModel>();
  projetosSelect = new SelectModel();

  receitaForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 4;

    this.receitaForm = this.formBuilder.group
      (
        {
          tipo: ['', [Validators.required]],
          valor: ['', [Validators.required]],
          data: ['', [Validators.required]],
          entidadeSelect: ['', [Validators.required]],
          projetosSelect: ['', [Validators.required]]
        }
      )
  }


  dadorForm() {
    return this.receitaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }



}
