import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Carrinho } from '../models/carrinho.model';
import { Ingresso } from '../models/ingresso.model';
import { ItemCarrinho } from '../models/itemCarrinho.model';
import { Lugar } from '../models/lugar.model';

@Injectable()
export class CarrinhoService {

  apiURL = 'http://localhost:5000';

  public itens: Carrinho[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public getShoppingCartUser(idUser: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/ShoppingCart?IdUsuario=${idUser}`);
  }

  public itemShoppingCart(carrinho: ItemCarrinho): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/ShoppingCart`, carrinho);
  }

  public removerItemCarrinho(idCarrinho: number): Observable<any> {
    return this.httpClient.delete(`${this.apiURL}/api/ShoppingCart?IdCarrinho=${idCarrinho}`);
  }

  public proximoId(): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Ticket/ProximoId`, 1);
  }

  public proximoIdPagamento(): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Payment/ProximoIdPagamento`, 1);
  }
  
  public cadastrarIngresso(ingresso: Ingresso): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Ticket/CadastraIngresso`, ingresso);
  }

  public cadastrarLugar(lugar: Lugar): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/ShoppingCart/Lugar`, lugar);
  }

}