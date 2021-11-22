import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/shared/services/auth.service';
import { Validacoes } from 'src/app/shared/utils/validacoes';
import { Usuario } from 'src/app/shared/models/usuario.model';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  public cadastro = false;
  
  public formularioCadastro = this.formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(5)]],
    documento: ['', [Validators.required, Validacoes.validaCPF]],
    email: [null, [Validators.required, Validators.email]],
    telefone: [null, [Validators.required, Validators.minLength(10)]],
    senha: [null, Validators.required],
    confirmarSenha: [null, Validators.required]
  });

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public loginScreen(): void {
    this.router.navigate(['acesso/signin']);
  }

  public signUp(): void {  
    const usuario: Usuario = new Usuario(
      this.formularioCadastro.value.nome,
      this.formularioCadastro.value.telefone,
      this.formularioCadastro.value.email,
      this.formularioCadastro.value.documento,
      this.formularioCadastro.value.senha
    );

    this.authService.signUpUser(usuario)
      .subscribe(res => {
        this.cadastro = true;
      },
      erro => {
        console.log(erro),
        this.cadastro = false;
      });
  }

}
