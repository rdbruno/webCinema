import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth.service';
import { Usuario } from '../../../shared/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formularioLogin = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    senha: [null, Validators.required],
  });

  constructor(
    private router: Router, 
    private formBuilder: FormBuilder, 
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public signIn(): void {
    const usuario: Usuario = new Usuario(
      '',
      '',
      this.formularioLogin.value.email,
      '',
      this.formularioLogin.value.senha
    );

    this.authService.login(usuario)
      .subscribe(res => {
        localStorage.setItem('Login', 'True');
        localStorage.setItem('UserID', res.Login[0].Id);
        localStorage.setItem('UserDoc', res.Login[0].RgCpf);
        this.router.navigate(['home']);
      },
      erro => {
        console.log(erro);
      })    
  }
}
