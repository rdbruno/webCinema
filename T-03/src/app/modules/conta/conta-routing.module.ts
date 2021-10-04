import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './perfil/perfil.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: 'historico', component: HistoricoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
