import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './pages/guards/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    //canActivate:[AuthGuard]
  },
  {
    path: 'entidade',
    loadChildren: () => import('./pages/entidade/entidade.module').then(m => m.EntidadeModule),
    //canActivate:[AuthGuard]
  }
  ,
  {
    path: 'projeto',
    loadChildren: () => import('./pages/projeto/projeto.module').then(m => m.ProjetoModule),
    //canActivate:[AuthGuard]
  }
  ,
  {
    path: 'receita',
    loadChildren: () => import('./pages/receita/receita.module').then(m => m.ReceitaModule),
    //canActivate:[AuthGuard]
  }
  ,
  {
    path: 'movimentacao',
    loadChildren: () => import('./pages/movimentacao/movimentacao.module').then(m => m.MovimentacaoModule),
    //canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
