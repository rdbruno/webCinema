import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { Carrinho } from '../models/carrinho.model';

@Injectable()
export class CarrinhoService {

  apiURL = 'http://localhost:5000';

  public itens: Carrinho[] = [];

  constructor(private router: Router, private httpClient: HttpClient) {
  }

}