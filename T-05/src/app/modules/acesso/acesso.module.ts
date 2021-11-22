import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcessoRoutingModule } from './acesso-routing.module';
import { AcessoComponent } from './acesso/acesso.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ 
    AcessoComponent, 
    CadastroComponent, 
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AcessoRoutingModule
  ]
})
export class AcessoModule { }