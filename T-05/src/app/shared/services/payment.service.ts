import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { Pagamento } from '../models/pagamento.model';

@Injectable()
export class PaymentService {

  apiURL = 'http://localhost:5000';

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public cadastraPagamento(pagamento: Pagamento): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Payment/CadastraPagamento`, pagamento);
  }
}