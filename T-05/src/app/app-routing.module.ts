import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards/auth-guard';
import { MenuComponent } from './shared/components/menu/menu.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'acesso',
    loadChildren: () => import('./modules/acesso/acesso.module').then(m => m.AcessoModule)
  },

  {
    path: 'home',
    component: MenuComponent,
    //canActivate: [ AuthGuard ],
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'salas' },
      { 
        path: 'salas',
        loadChildren: () => import('./modules/salas/salas.module').then(m => m.SalasModule)
      },
      {
        path: 'conta',
        canActivate: [ AuthGuard ],
        loadChildren: () => import('./modules/conta/conta.module').then(m => m.ContaModule)
      },
      {
        path: 'carrinho',
        canActivate: [ AuthGuard ],
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
