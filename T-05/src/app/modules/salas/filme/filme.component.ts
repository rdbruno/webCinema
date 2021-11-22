import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Filme } from 'src/app/shared/models/filme.model';
import { ItemCarrinho } from 'src/app/shared/models/itemCarrinho.model';
import { Lugar } from 'src/app/shared/models/lugar.model';

import { MovieService } from 'src/app/shared/services/movie.service';
import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  public filme!: Filme;
  public userLogged = false;
  public showWarning = false;
  public showMessage = false;
  public lugaresSelect: Array<{ IdLugarSala: number }> = [];
  public lugaresFilme: Array<{ IdSala: number, NomeLugar: string, BitSala: boolean, IdLugarSala: number }> = [];
  public totalIngresso = 0;
  public quantidadeLugares = 0;
  public showPlaces = false;
  public idSala = 0;
  public descricao = '';

  /*
  public lugares = [
    { id: '1' },
    { id: '2' },
    { id: '3' },
    { id: '4' },
    { id: '5' },
  ]

  public fileiras = [
    { letra: 'A' },
    { letra: 'B' },
    { letra: 'C' }
  ]
  */

  constructor(
    private activateRoute: ActivatedRoute,
    private movieService: MovieService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    if ((!localStorage.getItem('Login'))) {
      this.userLogged = false;
    } else {
      this.userLogged = true;
    }

    this.loadMovieInfo();
  }

  public loadMovieInfo(): void {
    let idFilme = this.activateRoute.snapshot.params['idFilme'];

    this.movieService.getMovieById(idFilme)
      .subscribe(res => {
        this.filme = res[0];
        this.descricao = res[0].Descricao;
        console.log(res);
      }, 
      erro => {
        console.log(erro);
      })
  }

  public carregarLugares(): void {
    const sala = document.querySelectorAll("input[name^='radioSala']:checked");
    let idFilme = this.activateRoute.snapshot.params['idFilme'];

    if (sala[0].id === 'radioSala1') {
      this.idSala = this.filme.IdSala1;

      this.movieService.getMoviePlaces(idFilme, this.filme.IdSala1)
        .subscribe(res => {
          console.log(res);
          for (var i = 0; i < res.length; i++) {
            this.lugaresFilme.push({ IdSala: res[i].IdSala, NomeLugar: res[i].NomeLugar, BitSala: res[i].BitSala, IdLugarSala: res[i].IdLugarSala });
          }          
          this.showPlaces = true;
        },
        erro => {
          console.log(erro);
        })
    } else {
      this.idSala = this.filme.IdSala2;

      this.movieService.getMoviePlaces(idFilme, this.filme.IdSala2)
        .subscribe(res => {
          for (var i = 0; i < res.length; i++) {
            this.lugaresFilme.push({ IdSala: res[i].IdSala, NomeLugar: res[i].NomeLugar, BitSala: res[i].BitSala, IdLugarSala: res[i].IdLugarSala });
          } 
          this.showPlaces = true;
        },
        erro => {
          console.log(erro);
        })
    }
  }

  public checkUser(): void {
    if (this.userLogged) {
      this.addMovie();
    } else {
      this.showWarning = true;
    }
  }

  public addMovie(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);
    let idFilme = this.activateRoute.snapshot.params['idFilme'];
    this.quantidadeLugares = this.lugaresSelect.length;

    for (var i = 0; i < this.lugaresSelect.length; i++) {
      this.totalIngresso = this.totalIngresso + this.filme.PrecoIngresso;

      const lugar: Lugar = new Lugar(
        id,
        idFilme,
        this.lugaresSelect[i].IdLugarSala
      );

      this.carrinhoService.cadastrarLugar(lugar)
        .subscribe(res => {
          console.log(res);
        },
        erro => {
          console.log(erro);
        })
    }
    
    const carrinho: ItemCarrinho = new ItemCarrinho(
      id,
      this.idSala,
      this.quantidadeLugares,
      this.totalIngresso
    );

    this.carrinhoService.itemShoppingCart(carrinho)
      .subscribe(res => {
        this.showMessage = true;
      },
      erro => {
        console.log(erro);
      })
  }

  public placeSelect(event: any): void {
    console.log(event.target.id);
    this.lugaresSelect.push({ IdLugarSala: event.target.id });
    
    /*
    for (var i = 0; i < this.lugaresSelect.length; i++) {
      console.log('Id do Lugar: ' + this.lugaresSelect[i].NomeLugar)
    }
    */
  }

}
