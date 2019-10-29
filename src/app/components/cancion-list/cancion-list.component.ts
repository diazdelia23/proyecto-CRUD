import { Component, OnInit } from '@angular/core';
import { CancionService } from '../../services/cancion.service';
import { Cancion } from 'src/app/models/cancion';

@Component({
  selector: 'app-cancion-list',
  templateUrl: './cancion-list.component.html',
  styleUrls: ['./cancion-list.component.css']
})
export class CancionListComponent implements OnInit {

  canciones: Cancion[];

  constructor(public CancionServicio: CancionService) { 
    this.CancionServicio.getCanciones().subscribe(res => {
      this.canciones = res;
    });
  }

  ngOnInit() {
   
    //this.canciones = this.CancionServicio.getCanciones();
  }

}
