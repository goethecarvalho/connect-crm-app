import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  get dadosForm() {
    return this.loginForm.controls;
  }

  loginUser() {
    if (this.loginForm.invalid) {
      return;
    }

    const login = this.dadosForm['login'].value;
    const senha = this.dadosForm['senha'].value;

    this.loginService.login(login, senha).subscribe(
      token => {
        alert(token);
        this.router.navigate(['/sistema']);
      },
      err => {
        console.log('err:', err);
        alert('corrigir esse depois');
        this.router.navigate(['/sistema']);
      }
    );
  }
}
