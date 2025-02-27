import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SelectModel } from 'src/app/models/SelectModel';
import { EntidadeService } from 'src/app/services/entidade.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.component.html',
  styleUrls: ['./receita.component.scss']
})
export class ReceitaComponent {

  tipos: string[] = ['INVESTIMENTO','PROJETO'];
  constructor(public menuService: MenuService, public formBuilder: FormBuilder, public entidadeService : EntidadeService) {
  }

  listaEntidades = new Array<SelectModel>();
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

      this.ListaEntidades();
  }


  dadorForm() {
    return this.receitaForm.controls;
  }

  enviar() {
    debugger
    var dados = this.dadorForm();

    alert(dados["name"].value)
  }

  ListaEntidades() {
    this.entidadeService.ListarEntidadesReceita()
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
