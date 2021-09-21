import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'acesso' },
  {
    path: 'acesso',
    loadChildren: () => import('./modules/acesso/acesso.module').then(m => m.AcessoModule)
  },
  {
    path: 'home',
    component: MenuComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'salas'
      },
      { 
        path: 'salas',
        loadChildren: () => import('./modules/salas/salas.module').then(m => m.SalasModule)
      },
      {
        path: 'conta',
        loadChildren: () => import('./modules/conta/conta.module').then(m => m.ContaModule)
      },
      {
        path: 'carrinho',
        loadChildren: () => import('./modules/carrinho/carrinho.module').then(m => m.CarrinhoModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
