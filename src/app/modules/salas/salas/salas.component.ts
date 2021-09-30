import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/shared/models/filme.model';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  public listaFilmes: Filme[] = [];
  public sala1 = '';
  public sala2 = '';
  public horario1 = '';
  public horario2 = '';
  public maximo = 15;
  public precoIngresso = 0;
  public totalIngresso = 0;

  constructor( private movieService: MovieService ) { }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  public carregarFilmes(): void {
    this.movieService.getAllMovies()
      .subscribe(res => {
        this.listaFilmes = res;
      }, 
      erro => {
        console.log(erro);
      })
  }

  public dialogIngresso(idFilme: number): void {
    for (var i = 0; i < this.listaFilmes.length; i++) {
      if (this.listaFilmes[i].IdFilme === idFilme) {
        this.sala1 = this.listaFilmes[i].Sala1;
        this.sala2 = this.listaFilmes[i].Sala2;
        this.horario1 = this.listaFilmes[i].HorarioSecao1;
        this.horario2 = this.listaFilmes[i].HorarioSecao2;
        this.precoIngresso = this.listaFilmes[i].PrecoIngresso;
      }
    }
  }

  public calcularIngresso(event: any): void {
    this.totalIngresso = this.precoIngresso * event.target.value;
  }

}
