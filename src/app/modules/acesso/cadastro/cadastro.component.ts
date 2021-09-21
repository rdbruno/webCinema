import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { Validacoes } from '../../../shared/utils/validacoes';
import { Usuario } from '../../../shared/models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastro = false;
  public dataAtual = '2021-09-16';

  public formularioCadastro = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(5)]],
    documento: ['', [Validators.required, Validacoes.validaCPF]],
    email: [null, [Validators.required, Validators.email]],
    senha: [null, Validators.required],
    confirmarSenha: [null, Validators.required]
  });

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }

  public loginScreen(): void {
    this.router.navigate(['acesso/signin']);
  }

  public signUp(): void {
    console.log('Realizado Cadastro');
    /*
    const usuario: Usuario = new Usuario(
      this.formularioCadastro.value.nome,
      '',
      this.formularioCadastro.value.documento,
      this.formularioCadastro.value.senha,
      this.dataAtual,
      1
    );

    this.authService.signUpUser(usuario)
      .subscribe(res => {
        console.log(res);
        this.cadastro = true;
      },
      erro => {
        console.log(erro),
        this.cadastro = false;
      });
    */
  }
}
