import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Entidade } from '../models/Entidade';
import { Observable } from 'rxjs';

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

export class EntidadeService {

    constructor( private httpClient : HttpClient)
    {
    }

    private readonly baseURL = environment["endPoint"];

    Cadastrar(entidade:Entidade)
    {
        return this.httpClient.post<Entidade>(`${this.baseURL}/entidades/cadastrar`,
        entidade)
    }

    Listar(): Observable<PaginatedResponse<Entidade>> {
      return this.httpClient.get<PaginatedResponse<Entidade>>(`${this.baseURL}/entidades/listar`);
    }

    ListarClientes(): Observable<PaginatedResponse<Entidade>> {
      return this.httpClient.get<PaginatedResponse<Entidade>>(`${this.baseURL}/entidades/listarClientes`);
    }

    ListarEntidadesReceita(): Observable<PaginatedResponse<Entidade>> {
      return this.httpClient.get<PaginatedResponse<Entidade>>(`${this.baseURL}/entidades/listarEntidadesReceita`);
    }

}
