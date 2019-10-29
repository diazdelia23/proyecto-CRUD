import { Component, OnInit, Input } from '@angular/core';
import { Cancion } from 'src/app/models/cancion';
import { CancionService } from 'src/app/services/cancion.service';

@Component({
  selector: 'app-cancion',
  templateUrl: './cancion.component.html',
  styleUrls: ['./cancion.component.css']
})
export class CancionComponent implements OnInit {

  @Input() cancion: Cancion;
  constructor( public cancionSerivcio: CancionService) { }

  ngOnInit() {
  }

  deleteCancion(cancion:Cancion){
    if(confirm('¿Quieres eliminar ' + cancion.cancion + ' de ' + cancion.artista + ' ?')){
      this.cancionSerivcio.deleteCancion(cancion).subscribe((data) => {
        console.log('eliminado');
      });
    }
    
  }
}
