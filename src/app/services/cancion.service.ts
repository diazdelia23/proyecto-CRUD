import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  
  url: string = environment.url;
  
  readonly baseUrl = this.url;

  canciones: Cancion[];
  constructor(private http: HttpClient) {
    console.log(this.baseUrl);
  }

  getCanciones(): Observable<Cancion[]> {
    
    return this.http.get<Cancion[]>(this.baseUrl + "/api/v1/canciones/");
  }

  addCanciones(cancion: Cancion): Observable<Cancion> {
    return this.http.post<Cancion>(this.baseUrl + "/api/v1/canciones/", cancion);
  }

  deleteCancion(cancion: Cancion): Observable<any> {
    return this.http.delete(this.baseUrl+"/api/v1/canciones/"+cancion.id);
  }

  getCancion(id: number): Observable<any> {
    return this.http.get(this.baseUrl+"/api/v1/canciones/"+id);
  }

  updateCancion(cancion: Cancion): Observable<Object> {
    return this.http.put(this.baseUrl+"/api/v1/canciones/"+cancion.id, cancion);
  }
}
