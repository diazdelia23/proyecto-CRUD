import { Component, OnInit } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';
import { Cancion } from 'src/app/models/cancion';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  canciones: Cancion[];

  constructor(public CancionServicio: CancionService) { }

  ngOnInit() {
    this.canciones = this.CancionServicio.getCanciones();
  }

}
