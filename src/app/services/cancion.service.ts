import { Injectable } from '@angular/core';
import { Cancion } from '../models/cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  canciones: Cancion[];
  constructor() {
    this.canciones = [
      //{nombre: 'Imagine', artista: 'Ariana Grande', album: 'thank u, next', anio: '2019', genero: 'pop', hide: true},
      //{nombre: '7 Rings', artista: 'Ariana Grande', album: 'thank u, next', anio: '2019', genero: 'pop', hide:true}
    ]
   }

   getCanciones(){
     if(localStorage.getItem('canciones') === null){
       return this.canciones;
     } else {
       this.canciones = JSON.parse(localStorage.getItem('canciones'));
       return this.canciones;
     }
   }

   addCanciones(cancion: Cancion){
     this.canciones.push(cancion);
    let canciones: Cancion[] = [];
     if(localStorage.getItem('canciones') === null){
      canciones.push(cancion);
      localStorage.setItem('canciones', JSON.stringify(canciones));
     } else{
       canciones = JSON.parse(localStorage.getItem('canciones'));
       canciones.push(cancion);
       localStorage.setItem('canciones', JSON.stringify(canciones));
     }
     
   }

   deleteCancion(cancion: Cancion){
    for(let i=0; i < this.canciones.length; i++){
      if(cancion == this.canciones[i])
      {
        this.canciones.splice(i,1);
        localStorage.setItem('canciones', JSON.stringify(this.canciones));
      }
    }
   }
}
