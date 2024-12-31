import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly baseUrl = environment.endPoint;

  constructor(private httpClient: HttpClient) {}

  login(login: string, senha: string) {
    const url = `${this.baseUrl}/login`;
    console.log('URL da requisição:', url); // Adicione este log para verificar a URL
    return this.httpClient.post<any>(url, { login, senha });
  }
}
