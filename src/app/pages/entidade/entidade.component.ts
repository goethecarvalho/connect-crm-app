import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entidade } from 'src/app/models/Entidade';
import { SelectModel } from 'src/app/models/SelectModel';
import { AuthService } from 'src/app/services/auth.service';
import { EntidadeService } from 'src/app/services/entidade.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-entidade',
  templateUrl: './entidade.component.html',
  styleUrls: ['./entidade.component.scss']
})
export class EntidadeComponent {

  tipos: string[] = ['PROPRIETARIO','FORNECEDOR','PRESTADOR','SERVICO','CLIENTE'];

  constructor(public menuService: MenuService, public formBuilder: FormBuilder,
    public authService : AuthService,
    public entidadeService : EntidadeService) {
  }

  entidadeForm: FormGroup;

  ngOnInit() {
    this.menuService.menuSelecionado = 2;

    this.entidadeForm = this.formBuilder.group
      (
        {
          nome: ['', [Validators.required]],
          tipo:['',Validators.required]
        }
      )
  }


  dadorForm() {
    return this.entidadeForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    let item = new Entidade();
    item.Nome = dados["nome"].value;
    item.Id =0;

    this.entidadeService.Cadastrar(item)
    .subscribe((response: Entidade) => {

      this.entidadeForm.reset();

    }, (error) => console.error(error),
      () => { })

  }

}
