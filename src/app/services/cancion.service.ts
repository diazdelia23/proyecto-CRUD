import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  canciones: Cancion[];
  constructor() {
    this.canciones = [
      {nombre: 'Imagine', artista: 'Ariana Grande', album: 'thank u, next', anio: '2019', genero: 'pop', hide: true},
      {nombre: '7 Rings', artista: 'Ariana Grande', album: 'thank u, next', anio: '2019', genero: 'pop', hide:true}
    ]
   }

   getCanciones(){
     return this.canciones;
   }

   addCanciones(cancion: Cancion){
    this.canciones.push(cancion);
   }

   deleteCancion(cancion: Cancion){
    for(let i=0; i < this.canciones.length; i++){
      if(cancion == this.canciones[i])
      {
        this.canciones.splice(i,1);
      }
    }
   }
}
