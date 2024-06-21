import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {

  entidades: string[] = ['GEPE - GRUPO ESPÍRITA PAULO E ESTEVÃO - AGUA FRIA'];
  tipos: string[] = ['RESIDENCIAL','COMERCIAL'];
  status: string[] = ['ABERTO','ANDAMENTO','CANCELADO','FECHADO'];

  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }

  listEntidades = new Array<SelectModel>();
  entidadeSelect = new SelectModel();


  projetoForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 3;

    this.projetoForm = this.formBuilder.group
      (
        {
          numero: ['', [Validators.required]],
          descricao: ['', [Validators.required]],
          tipo: ['', [Validators.required]],
          entidade: ['', [Validators.required]],
          data: ['', [Validators.required]],
          valor: ['', [Validators.required]]
        }
      )
  }


  dadorForm() {
    return this.projetoForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }



}
