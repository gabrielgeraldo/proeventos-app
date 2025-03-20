import { Evento } from './../models/Evento';
import { EmpresasProtheus } from './../models/EmpresasProtheus';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { PaginatedResult } from '@app/models/Pagination';

@Injectable(
// { providedIn: 'root'}
)
export class EventoService {
  baseURL = 'https://localhost:5001/api/eventos';
  // baseURL = 'https://localhost:44388/api/eventos';

  baseURLEmpresasProtheus = 'http://179.131.11.40:3680/rest/api/framework/environment/v1/companies';

  constructor(private http: HttpClient) { }

  public getEventos(page?: number, itemsPerPage?: number, term?: string): Observable<PaginatedResult<Evento[]>> {
    const paginatedResult: PaginatedResult<Evento[]> = new PaginatedResult<Evento[]>();

    let params = new HttpParams();

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }

    if (term != null && term !== ''){
      params = params.append('term', term);
    }

    return this.http
      .get<Evento[]>(this.baseURL, {observe: 'response', params })
      .pipe(
        take(1),
        map((response) => {
          paginatedResult.result = response.body;
          if (response.headers.has('Pagination')) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        }));
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/${tema}/tema`);
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/${id}`);
  }

  public getEmpresasDoProtheus(): Observable<EmpresasProtheus[]> {
    return this.http.get<EmpresasProtheus[]>(this.baseURLEmpresasProtheus);
  }

  public deleteEvento(id: number): Observable<any> {
    return this.http
      .delete(`${this.baseURL}/${id}`)
      .pipe(take(1));
  }

  public post(evento: Evento): Observable<Evento> {
    return this.http
      .post<Evento>(this.baseURL, evento)
      .pipe(take(1));
  }

  public put(evento: Evento): Observable<Evento> {
    return this.http
      .put<Evento>(`${this.baseURL}/${evento.id}`, evento)
      .pipe(take(1));
  }

  postUpload(eventoId: number, file: File): Observable<Evento> {
    const fileToUpload = file[0] as File;
    const formData = new FormData();
    formData.append('file', fileToUpload);

    return this.http
      .post<Evento>(`${this.baseURL}/upload-image/${eventoId}`, formData)
      .pipe(take(1));
  }

}
