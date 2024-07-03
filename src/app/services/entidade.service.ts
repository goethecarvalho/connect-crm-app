import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment';
import { Entidade } from '../models/Entidade';

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

    Listar()
    {
        return this.httpClient.get(`${this.baseURL}/entidades/listar`);
    }

}
