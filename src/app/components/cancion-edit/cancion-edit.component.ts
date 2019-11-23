import { Component, OnInit, Input } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';
import { Cancion } from 'src/app/models/cancion';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cancion-edit',
  templateUrl: './cancion-edit.component.html',
  styleUrls: ['./cancion-edit.component.css']
})
export class CancionEditComponent implements OnInit {

  @Input() cancion: Cancion;

  cancionForm: any;
  cancionObtenida: Cancion;

  constructor(
    private formBuilder: FormBuilder,
    public cancionSerivcio: CancionService, 
    private route: ActivatedRoute, 
    private location: Location) {
      
    }

    validar(){
      this.cancionForm = this.formBuilder.group({
        name: ['', [Validators.required, Validators.maxLength(100)]],
        artist: ['', [Validators.required, Validators.maxLength(100)]],
        album: ['', [Validators.required, Validators.maxLength(100)]],
        year: ['', [Validators.required, Validators.pattern('([1-2][0|9][0-9][0-9])')]],
        gender: ['', [Validators.required, Validators.maxLength(100)]]
      });
    }

  ngOnInit() {
    this.getCancion();
    var fecha = new Date();
    var ano = fecha.getFullYear().toString();
    document.getElementById("anio").setAttribute("max", ano);
    this.validar();    
  }

  editCancion(){
    this.cancionSerivcio.updateCancion(this.cancionObtenida).subscribe((data) => {
      console.log('modificado');
    });
    this.goBack();
  }

  getCancion(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cancionSerivcio.getCancion(id).subscribe(res => {
      this.cancionObtenida = res[0];
      console.log(this.cancionObtenida)
    });
    //this.cancionObtenida = this.cancionSerivcio.getCancion(id);
  }

  goBack(): void {
    this.location.back();
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
