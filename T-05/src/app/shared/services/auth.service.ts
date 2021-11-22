import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { IdentificaUsuario } from '../models/id-usuario.model';
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

  public getLoyalti(idUser: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/Loyalti?IdUsuario=${idUser}`);
  }

  public updateLoyalti(idUsuario: IdentificaUsuario): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/api/Loyalti`, idUsuario);
  }

  public devolveLoyalti(idUsuario: IdentificaUsuario): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/api/Loyalti/Devolve`, idUsuario);
  }

  public loadProfile(idUser: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/Profile?IdUsuario=${idUser}`);
  }
}