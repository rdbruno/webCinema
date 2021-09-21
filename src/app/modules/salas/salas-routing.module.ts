import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SalasComponent } from './salas/salas.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'salas' },
  { path: 'salas', component: SalasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalasRoutingModule { }