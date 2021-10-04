import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { AuthService } from './shared/services/auth.service';
import { MovieService } from './shared/services/movie.service';
import { CarrinhoService } from './shared/services/carrinho.service';
import { PaymentService } from './shared/services/payment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    AuthService,
    MovieService,
    CarrinhoService,
    PaymentService,
    { provide: LOCALE_ID, useValue: 'pt-PT' },
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
