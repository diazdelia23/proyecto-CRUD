import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  readonly baseUrl = 'http://localhost:3000/api/v1/canciones/';

  canciones: Cancion[];
  constructor(private http: HttpClient) {}

  getCanciones(): Observable<Cancion[]> {
    return this.http.get<Cancion[]>(this.baseUrl);
  }

  addCanciones(cancion: Cancion): Observable<Cancion> {
    return this.http.post<Cancion>(this.baseUrl, cancion);
  }

  deleteCancion(cancion: Cancion): Observable<any> {
    return this.http.delete(this.baseUrl+cancion.id);
  }

  getCancion(id: number): Observable<any> {
    return this.http.get(this.baseUrl+id);
  }

  updateCancion(cancion: Cancion): Observable<Object> {
    return this.http.put(this.baseUrl+cancion.id, cancion);
  }
}
