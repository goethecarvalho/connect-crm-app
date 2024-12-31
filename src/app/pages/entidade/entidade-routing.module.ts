import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntidadeComponent } from './entidade.component';

const routes: Routes = [{
    path: '',
    component: EntidadeComponent,
  }];

  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class EntidadeRoutingModule{}
