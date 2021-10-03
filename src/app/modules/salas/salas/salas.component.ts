import { Component, OnInit } from '@angular/core';

import { Filme } from 'src/app/shared/models/filme.model';
import { ItemCarrinho } from 'src/app/shared/models/itemCarrinho.model';

import { MovieService } from 'src/app/shared/services/movie.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

  public listaFilmes: Filme[] = [];
  public sala1 = '';
  public sala2 = '';
  public idSala1 = 0;
  public idSala2 = 0;
  public horario1 = '';
  public horario2 = '';
  public maximo = 15;
  public precoIngresso = 0;
  public totalIngresso = 0;
  public quantidadeLugares = 0;

  constructor( private movieService: MovieService, private carrinhoService: CarrinhoService ) { }

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
        this.idSala1 = this.listaFilmes[i].IdSala1;
        this.idSala2 = this.listaFilmes[i].IdSala2;
        this.horario1 = this.listaFilmes[i].HorarioSecao1;
        this.horario2 = this.listaFilmes[i].HorarioSecao2;
        this.precoIngresso = this.listaFilmes[i].PrecoIngresso;
      }
    }
  }

  public calcularIngresso(event: any): void {
    this.totalIngresso = this.precoIngresso * event.target.value;
    this.quantidadeLugares = event.target.value;
  }

  public adicionarCarrinho(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);
    let idSala = 0;

    const sala = document.querySelectorAll("input[name^='radioSala']:checked");
    if (sala[0].id === 'radioSala1') {
      idSala = this.idSala1;
    } else {
      idSala = this.idSala2;
    }
    
    const carrinho: ItemCarrinho = new ItemCarrinho(
      id,
      2,
      this.quantidadeLugares,
      this.totalIngresso
    );

    this.carrinhoService.itemShoppingCart(carrinho)
      .subscribe(res => {
        console.log(res);
      },
      erro => {
        console.log(erro);
      })
  }
}
