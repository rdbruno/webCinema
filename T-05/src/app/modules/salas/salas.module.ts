import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

import { SalasComponent } from './salas/salas.component';
import { FilmeComponent } from './filme/filme.component';

@NgModule({
  declarations: [  
    SalasComponent, 
    FilmeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalasRoutingModule
  ]
})
export class SalasModule { }