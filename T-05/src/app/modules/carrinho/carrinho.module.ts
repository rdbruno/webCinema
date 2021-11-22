import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrinhoRoutingModule } from './carrinho-routing.module';
import { CarrinhoComponent } from './carrinho/carrinho.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CarrinhoRoutingModule
  ]
})
export class CarrinhoModule { }
