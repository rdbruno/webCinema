import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Carrinho } from 'src/app/shared/models/carrinho.model';

import { CarrinhoService } from 'src/app/shared/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public itensCarrinho: Carrinho[] = [];

  public formularioCompra = this.formBuilder.group({
    numeroCartao: [null, [Validators.required, Validators.minLength(16)]],
    cartaoVencimento: [null, [Validators.required]],
    codigoCartao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  });

  constructor( private formBuilder: FormBuilder, private carrinhoService: CarrinhoService ) { }

  ngOnInit(): void {
    this.getCarrinhoUser();
  }

  public getCarrinhoUser(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);
    
    this.carrinhoService.getShoppingCartUser(id)
      .subscribe(res => {
        this.itensCarrinho = res;
      }, 
      erro => {
        console.log(erro);
      });      
  }

  public realizarCompra(): void {
    console.log('Comprei');
  }

}
