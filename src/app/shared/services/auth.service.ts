import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  apiURL = 'http://localhost:8080/usuarios';

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public signUpUser(usuario: Usuario): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/`, usuario);
  }

  public login(email: string, cnpj: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/login/${email}/${cnpj}`);
  }

  public getUserWithID(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/${id}`);
  }
}