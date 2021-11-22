import { Component, OnInit } from '@angular/core';

import { IdentificaUsuario } from 'src/app/shared/models/id-usuario.model';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public nome = '';
  public email = '';
  public senha = '';
  public documento = '';
  public telefone = '';
  public cliente = false;  

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.carregarPerfil();
  }

  public carregarPerfil(): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);

    this.authService.loadProfile(id)
      .subscribe(res => {
        this.nome = res[0].Nome;
        this.email = res[0].Email;
        this.senha = res[0].Senha;
        this.documento = res[0].RgCpf;
        this.telefone = res[0].Telefone; 

        if (res[0].BitFidelidade) {
          this.cliente = true;
        } else {
          this.cliente = false;
        }
      },
      erro => {
        console.log('Erro ao carregar o perfil: ', erro);
      })
  }

  public atualizaFidelidade(event: any): void {
    let user = JSON.parse(localStorage.getItem('UserID') || '{}');
    var id = parseInt(user);

    const idUser: IdentificaUsuario = new IdentificaUsuario( id );
    console.log(idUser.IdUsuario);

    if (event.target.checked) {
      this.authService.updateLoyalti(idUser)
        .subscribe(res => {
          console.log(res)
        },
        erro => {
          console.log(erro);
        })
    } else {
      this.authService.devolveLoyalti(idUser)
        .subscribe(res => {
          console.log(res);
        },
        erro => {
          console.log(erro);
        })
    }
  }

}
