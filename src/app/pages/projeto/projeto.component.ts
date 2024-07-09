import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projeto } from 'src/app/models/Projeto';
import { SelectModel } from 'src/app/models/SelectModel';
import { EntidadeService } from 'src/app/services/entidade.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-projeto',
  templateUrl: './projeto.component.html',
  styleUrls: ['./projeto.component.scss']
})
export class ProjetoComponent {

  tipos: string[] = ['RESIDENCIAL','COMERCIAL'];
  status: string[] = ['ABERTO','ANDAMENTO','CANCELADO','FECHADO'];

  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public projetoService : ProjetoService, public entidadeService : EntidadeService) {
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
          status: ['', [Validators.required]],
          entidadeSelect: ['', [Validators.required]],
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

    let item = new Projeto();
    item.numero = dados["numero"].value;
    item.descricao = dados["descricao"].value;
    item.data = dados["data"].value;
    item.valor = dados["valor"].value;
    item.TipoProjeto = dados["tipo"].value;
    item.StatusProjeto = dados["status"].value;
    item.Entidade = dados["entidadeSelect"].value;


    this.projetoService.Cadastrar(item)
    .subscribe((response: Projeto) => {

      this.projetoForm.reset();

    }, (error) => console.error(error),
      () => { })

  }

  ListaEntidades() {
    this.entidadeService.ListarClientes()
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
