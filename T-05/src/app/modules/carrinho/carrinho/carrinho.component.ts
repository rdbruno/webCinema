import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Carrinho } from 'src/app/shared/models/carrinho.model';
import { Ingresso } from 'src/app/shared/models/ingresso.model';
import { Pagamento } from 'src/app/shared/models/pagamento.model';

import { CarrinhoService } from 'src/app/shared/services/carrinho.service';
import { PaymentService } from 'src/app/shared/services/payment.service';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  public itensCarrinho: Carrinho[] = [];
  public compraFeita = false;
  public idIngressoUsuario = 0;
  public idPagamento = 0;
  public formaPagamentoId = 0;
  public fidelidade = false;
  public novoValor = 0;

  public formularioCompra = this.formBuilder.group({
    numeroCartao: [null, [Validators.required, Validators.minLength(16)]],
    cartaoVencimento: [null, [Validators.required]],
    codigoCartao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private carrinhoService: CarrinhoService, 
    private paymentService: PaymentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('Fidelidade') === 'true') {
      this.fidelidade = true;
    } else {
      this.fidelidade = false;
    }

    this.getCarrinhoUser();
    
    this.carrinhoService.proximoId()
      .subscribe(res => {
        this.idIngressoUsuario = res[0].IdIngressoUsuario;
      },
      erro => {
        console.log(erro);
      });

    this.carrinhoService.proximoIdPagamento()
      .subscribe(res => {
        this.idPagamento = res[0].IdPagamentoUsuario;
      },
      erro => {
        console.log(erro);
      })
  }

  public getCarrinhoUser(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);
    
    this.carrinhoService.getShoppingCartUser(id)
      .subscribe(res => {
        this.itensCarrinho = res;

        if (this.fidelidade) {
          for (var i = 0; i < this.itensCarrinho.length; i++) {
            const porcentagem = (this.itensCarrinho[i].ValorTotal / 100) * 20;
            this.itensCarrinho[i].ValorDesconto = this.itensCarrinho[i].ValorTotal - porcentagem;
          }
        }
      }, 
      erro => {
        console.log(erro);
      });      
  }

  public removerCarrinho(id: number): void {
    this.carrinhoService.removerItemCarrinho(id)
      .subscribe(res => {
        this.getCarrinhoUser();
      },
      erro => {
        console.log(erro);
      });
  }

  public selectedPayment(event: any): void {
    this.formaPagamentoId = event.target.value;
  }

  public realizarCompra(): void {
    let doc = JSON.parse(localStorage.getItem('UserDoc') || '{}');
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);

    for (var i = 0; i < this.itensCarrinho.length; i++) {
      let valorCompra = 0;

      if (this.fidelidade) {
        valorCompra = this.itensCarrinho[i].ValorDesconto
      } else {
        valorCompra = this.itensCarrinho[i].ValorTotal
      }

      let ingresso: Ingresso = new Ingresso(
        this.idIngressoUsuario,
        id,
        this.itensCarrinho[i].IdSala,
        this.itensCarrinho[i].Lugar,
        this.idPagamento,
        valorCompra,
        doc
      );

      this.carrinhoService.cadastrarIngresso(ingresso)
        .subscribe(res => {
          console.log(res);
        },
        erro => {
          console.log(erro);
        })
    }

    const pagamento: Pagamento = new Pagamento(
      this.idPagamento,
      this.formaPagamentoId,
      this.formularioCompra.value.numeroCartao,
      this.formularioCompra.value.cartaoVencimento,
      this.formularioCompra.value.codigoCartao
    );

    this.paymentService.cadastraPagamento(pagamento)
      .subscribe(res => {
        this.compraFeita = true;
        this.getCarrinhoUser();
        this.getLoyalti();
      },
      erro => {
        console.log(erro);
      })
  }

  public getLoyalti(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);

    this.authService.getLoyalti(id)
      .subscribe(res => {
        console.log(res)
        if (res[0].Fidelidade === 1) {
          if (localStorage.getItem('Fidelidade') === 'false') {
            localStorage.setItem('PodeAtualizar', 'True');
          };
        }
      },
      erro => {
        console.log(erro);
      })
  }

}
