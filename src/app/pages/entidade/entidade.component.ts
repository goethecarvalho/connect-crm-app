import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.scss']
})
export class EntidadeComponent {

  tipos: string[] = ['CLIENTE', 'FORNECEDOR', 'PRESTADOR'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder) {
  }


  entidadeForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.entidadeForm = this.formBuilder.group
      (
        {
          name: ['', [Validators.required]]
        }
      )
  }


  dadorForm() {
    return this.entidadeForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }



}
