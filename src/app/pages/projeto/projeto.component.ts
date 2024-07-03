import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Entidade } from 'src/app/models/Entidade';
import { SelectModel } from 'src/app/models/SelectModel';
import { EntidadeService } from 'src/app/services/entidade.service';
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

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public entidadeService : EntidadeService) {
  }

  listaEntidades = new Array<SelectModel>();
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
          entidadeSelect: ['', [Validators.required]],
          entidade: ['', [Validators.required]],
          data: ['', [Validators.required]],
          valor: ['', [Validators.required]]
        }
      )

      this.ListaEntidades();
  }


  dadorForm() {
    return this.projetoForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }

  ListaEntidades() {
    this.entidadeService.Listar()
        .subscribe((response) => {
            const entidades = response.content;
            console.log('Entidades recebidas:', entidades); // Adicione este log
            var listEntidades = [];

            entidades.forEach(x => {
                if (x && x.id !== undefined && x.nome !== undefined) { // Verifique se id e nome existem
                    var item = new SelectModel();
                    item.id = x.id.toString();
                    item.name = x.nome;

                    listEntidades.push(item);
                } else {
                    console.error('Entidade inválida', x); // Log entidades inválidas
                }
            });

            this.listaEntidades = listEntidades;
        }, (error) => {
            console.error('Erro ao listar entidades', error);
        });
  }

}
