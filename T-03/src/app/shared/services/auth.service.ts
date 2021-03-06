import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

  apiURL = 'http://localhost:5000';

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public signUpUser(usuario: Usuario): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Auth`, usuario);
  }

  public login(usuario: Usuario): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Auth/GetLogin`, usuario);
  }
}