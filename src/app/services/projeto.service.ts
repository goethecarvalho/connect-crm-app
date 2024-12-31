import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Observable } from 'rxjs';
import { Projeto } from '../models/Projeto';

interface PaginatedResponse<T> {
  content: T[];
  pageable: any;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: any;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

@Injectable({
    providedIn: 'root'
})

export class ProjetoService {

    constructor( private httpClient : HttpClient)
    {
    }

    private readonly baseURL = environment["endPoint"];

    Cadastrar(projeto:Projeto)
    {
        return this.httpClient.post<Projeto>(`${this.baseURL}/projetos/cadastrar`,
          projeto)
    }

    Listar(): Observable<PaginatedResponse<Projeto>> {
      return this.httpClient.get<PaginatedResponse<Projeto>>(`${this.baseURL}/projetos/listar`);
    }

}
