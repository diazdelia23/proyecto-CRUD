import { Component, OnInit } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-cancion-edit',
  templateUrl: './cancion-edit.component.html',
  styleUrls: ['./cancion-edit.component.css']
})
export class CancionEditComponent implements OnInit {

  constructor(public cancionSerivcio: CancionService) { }

  ngOnInit() {
  }

}
