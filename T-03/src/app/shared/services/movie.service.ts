import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UpdateFilme } from '../models/update.model';

@Injectable()
export class MovieService {

  apiURL = 'http://localhost:5000';

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public getAllMovies(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/Movies`);
  }

  public getMoviesByUser(usuario: number): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/Movies/IdUsuario=${usuario}`)
  }

  public updateDocumentMovie(update: UpdateFilme): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/api/Ticket`, update);
  }

  public deleteMovie(IdIngresso: UpdateFilme): Observable<any> {
    return this.httpClient.post(`${this.apiURL}/api/Ticket/DevolveIngresso`, IdIngresso);
  }

}