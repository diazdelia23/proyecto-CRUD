import { Component, OnInit } from '@angular/core';
import { CancionService } from 'src/app/services/cancion.service';
import { Cancion } from 'src/app/models/cancion';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [NgbCarouselConfig]
})
export class DashboardComponent implements OnInit {

  canciones: Cancion[];
  //1050  10 images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
  images = [
    "https://picsum.photos/id/479/1700/750",
    "https://picsum.photos/id/282/1700/750",
    "https://picsum.photos/id/294/1700/750",

  ]
  constructor(public CancionServicio: CancionService, config: NgbCarouselConfig) {
    config.interval = 3500;  
    config.wrap = true;  
    config.keyboard = false;  
    config.pauseOnHover = true;
   }

 
  ngOnInit() {
    this.CancionServicio.getCanciones().subscribe(res => {
      this.canciones = res;
      this.canciones.slice(0,4);
    })
    //this.canciones = this.CancionServicio.getCanciones().slice(0,4);
  }

}
