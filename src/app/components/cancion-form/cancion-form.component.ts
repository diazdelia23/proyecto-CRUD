import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { CancionService} from '../../services/cancion.service'
import { AlertService } from '../../_alert';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancion-form',
  templateUrl: './cancion-form.component.html',
  styleUrls: ['./cancion-form.component.css']
})
export class CancionFormComponent implements OnInit {

  //@Input () cancion: Cancion;

  cancion: Cancion = new Cancion();
  constructor(public cancionServicio : CancionService, private alertService: AlertService, private formBuilder: FormBuilder) { 
    
    this.validar();
    
  }
  
  ngOnInit() {
    var fecha = new Date();
    var ano = fecha.getFullYear().toString();
    document.getElementById("anio").setAttribute("max", ano);
  }

  cancionForm: any;
  todasCanciones: Cancion[];
  id: number;

  validar(){
    this.cancionForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      artist: ['', [Validators.required, Validators.maxLength(100)]],
      album: ['', [Validators.required, Validators.maxLength(100)]],
      year: ['', [Validators.required, Validators.pattern('([1-2][0|9][0-9][0-9])')]],
      gender: ['', [Validators.required, Validators.maxLength(100)]]
    });
  }

  



  success(message: string) {
    this.alertService.success(message);
  }

  addCancion(Nombre: HTMLInputElement , Artista: HTMLInputElement, Album: HTMLInputElement, Anio: HTMLInputElement, Genero: HTMLInputElement){
    console.log('Agregando..', Nombre.value);
    this.cancionServicio.addCanciones(
      {
        id:0,
        cancion: Nombre.value,
        artista: Artista.value,
        album: Album.value,
        anio: Anio.value,
        genero: Genero.value,
        hide: true
      }
      ).subscribe((data) => {
        console.log('agregado')
      });
      
      this.success("Se agregó " + Nombre.value + " de " + Artista.value + " a la lista.");
      Nombre.value='';
      Artista.value='';
      Album.value='';
      Anio.value='';
      Genero.value='';
      Nombre.focus();
      this.validar();
    return false;
  }

  get name() {
    return this.cancionForm.get('name');
  }
  
  get artist() {
    return this.cancionForm.get('artist');
  }

  get album() {
    return this.cancionForm.get('album');
  }
  
  get year() {
    return this.cancionForm.get('year');
  }

  get gender() {
    return this.cancionForm.get('gender');
  }

}
