import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { EntidadeService } from 'src/app/services/entidade.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProjetoService } from 'src/app/services/projeto.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent {

  tipos: string[] = ['DEBITO','CREDITO'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public entidadeService : EntidadeService, public projetoService : ProjetoService) {
  }

  listaEntidades = new Array<SelectModel>();
  entidadeSelect = new SelectModel();

  listaProjetos = new Array<SelectModel>();
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
          valor: ['', [Validators.required]],
          data: ['', [Validators.required]],
          entidadeSelect: ['', [Validators.required]],
          projetoSelect: ['', [Validators.required]],
        }
      )

      this.ListaEntidades();
      this.ListaProjetos();
  }


  dadorForm() {
    return this.movimentacaoForm.controls;
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

  ListaProjetos() {
    this.projetoService.Listar()
        .subscribe((response) => {
            const projetos = response.content;
            console.log('Projetos recebidos:', projetos); // Adicione este log
            var listProjetos = [];

            projetos.forEach(x => {
                if (x && x.id !== undefined && x.descricao !== undefined) { // Verifique se id e nome existem
                    var item = new SelectModel();
                    item.id = x.id.toString();
                    item.name = x.descricao;

                    listProjetos.push(item);
                } else {
                    console.error('Projeto inválido', x); // Log entidades inválidas
                }
            });

            this.listaProjetos = listProjetos;
        }, (error) => {
            console.error('Erro ao listar projetos', error);
        });
  }

  atualizarTipoLabel() {
    const tipoSelecionado = this.movimentacaoForm.get('tipo')?.value;
    switch (tipoSelecionado) {
      case 'DEBITO':
        return 'Destino';
      case 'CREDITO':
        return 'Origem';
      default:
        return '';
    }
  }


}
