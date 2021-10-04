import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalasRoutingModule } from './salas-routing.module';
import { SalasComponent } from './salas/salas.component'; 

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ 
    SalasComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SalasRoutingModule
  ]
})
export class SalasModule { }