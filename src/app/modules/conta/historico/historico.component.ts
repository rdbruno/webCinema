import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/shared/services/movie.service';

import { FilmeUsuario } from 'src/app/shared/models/filme-usuario.model';
import { UpdateFilme } from 'src/app/shared/models/update.model';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  public filmes: FilmeUsuario[] = [];
  public documentoFilme = '';
  public nomeFilme = '';
  public ingresso = 0;
  public alterado = false;

  constructor(
    private movieService: MovieService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  public getMovies(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);

    this.movieService.getMoviesByUser(id)
      .subscribe(res => {
        this.filmes = res;
      },
      erro => {
        console.log(erro);
      })
  }

  public dialogFilme(idFilme: number): void {
    for (var i = 0; i < this.filmes.length; i++) {
      if (this.filmes[i].IdFilme === idFilme) {
        this.documentoFilme = this.filmes[i].RgCpf;
        this.nomeFilme = this.filmes[i].NomeFilme;
        this.ingresso = this.filmes[i].IdIngresso;
      }
    }
  }

  public salvarDetalhes(): void {
    var novoDocumento = (<HTMLInputElement>document.getElementById('documento')).value;

    const update = new UpdateFilme(
      this.ingresso,
      novoDocumento
    );
    
    this.movieService.updateDocumentMovie(update)
      .subscribe(res => {
        this.alterado = true;
        this.getMovies();
      },
      erro => {
        console.log(erro);
      })
  }

  public devolverIngresso(ingressoId: number): void {
    const update = new UpdateFilme(
      ingressoId,
      ''
    );

    this.movieService.deleteMovie(update)
      .subscribe(res => {
        console.log(res);
        this.getMovies();
      },
      erro => {
        console.log(erro);
      })
  }

}
