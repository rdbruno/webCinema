import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public formularioCompra = this.formBuilder.group({
    numeroCartao: [null, [Validators.required, Validators.minLength(16)]],
    cartaoVencimento: [null, [Validators.required]],
    codigoCartao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  });

  public arrayHistorico = [
    { 'numero': '01', 'filme': 'Interestelar', 'ingressos': '02', 'sessao': 'Sala A - 12/05/2021'},
    { 'numero': '02', 'filme': 'Star Wars III', 'ingressos': '03', 'sessao': 'Sala B - 11/12/2021'},
    { 'numero': '05', 'filme': 'Bastardos Inglórios', 'ingressos': '01', 'sessao': 'Sala C - 22/09/2021'}
  ]

  constructor( private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.getCarrinhoUser();
  }

  public getCarrinhoUser(): void {
    console.log('Requisição carrinho por usuário');
  }

  public realizarCompra(): void {
    console.log('Comprei');
  }

}
