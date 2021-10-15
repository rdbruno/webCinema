import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalasComponent } from './salas/salas.component';
import { FilmeComponent } from './filme/filme.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'salas' },
  { path: 'salas', component: SalasComponent },
  { path: 'filme/:idFilme', component: FilmeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }