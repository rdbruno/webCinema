import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {

  apiURL = 'http://localhost:5000';

  constructor(private router: Router, private httpClient: HttpClient) {
  }

  public getAllMovies(): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/Movies`);
  }
}