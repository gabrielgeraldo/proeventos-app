import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Personagem } from '@app/models/Personagem';
import { Observable } from 'rxjs';

@Injectable(
  // { providedIn: 'root'}
  )
export class PersonagemService {

  basePersonagem = 'https://rickandmortyapi.com/api/character/[1,2,3,40]';
  baseGetPersonagem = 'https://rickandmortyapi.com/api/character/';

  constructor(private http: HttpClient) { }

  public getPersonagens(): Observable<Personagem[]> {
    return this.http.get<Personagem[]>(this.basePersonagem);
  }

  public getPersonagemById(id: number): Observable<Personagem> {
    return this.http.get<Personagem>(`${this.baseGetPersonagem}/${id}`);
  }

}


