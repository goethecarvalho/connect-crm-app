import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { EntidadeService } from 'src/app/services/entidade.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-movimentacao',
  templateUrl: './movimentacao.component.html',
  styleUrls: ['./movimentacao.component.scss']
})
export class MovimentacaoComponent {

  projetos: string[] = ['PROJETO MICRO GERAÇÃO (ATÉ 275 kW)'];
  tipos: string[] = ['DEBITO','CREDITO'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public entidadeService : EntidadeService) {
  }

  listaEntidades = new Array<SelectModel>();
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
          valor: ['', [Validators.required]],
          data: ['', [Validators.required]],
          entidadeSelect: ['', [Validators.required]],
          projetoSelect: ['', [Validators.required]],
        }
      )

      this.ListaEntidades();
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
