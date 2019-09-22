import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { CancionService} from '../../services/cancion.service'

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent implements OnInit {

  //@Input () cancion: Cancion;

  cancion: Cancion = new Cancion();
  constructor(public cancionServicio : CancionService) { }
  
  ngOnInit() {
  }

  addCancion(Nombre: HTMLInputElement , Artista: HTMLInputElement, Album: HTMLInputElement, Anio: HTMLInputElement, Genero: HTMLInputElement){
    console.log('Agregando..', Nombre.value);
    this.cancionServicio.addCanciones(
      {
        nombre: Nombre.value,
        artista: Artista.value,
        album: Album.value,
        anio: Anio.value,
        genero: Genero.value,
        hide: true
      }
      );
      Nombre.value='';
      Artista.value='';
      Album.value='';
      Anio.value='';
      Genero.value='';
      Nombre.focus();
    console.log(this.cancionServicio.getCanciones());
    return false;
  }

}
