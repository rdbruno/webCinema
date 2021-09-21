import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContaRoutingModule } from './conta-routing.module';
import { PerfilComponent } from './perfil/perfil.component';
import { HistoricoComponent } from './historico/historico.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    PerfilComponent,
    HistoricoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContaRoutingModule
  ]
})
export class ContaModule { }
