import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Carrinho } from '../models/carrinho.model';
import { ItemCarrinho } from '../models/itemCarrinho.model';

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

}