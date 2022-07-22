import { Component, OnInit } from '@angular/core';
//Agregamos el json de lugares (servicio)
import { LugaresService } from 'src/app/servicios/servicios/lugares.service';
@Component({
  selector: 'app-alojamiento',
  templateUrl: './alojamiento.component.html',
  styleUrls: ['./alojamiento.component.scss']
})
export class AlojamientoComponent implements OnInit {
//Esto es para que levante el Json y recorra el array en consola
  constructor(
    private lugaresService :LugaresService
  ) { }
  mostrarLugares () {
    this.lugaresService.getLugares().subscribe(respuesta => {
      console.log(respuesta);
      // this.data = respuesta;
    });
  }
  ngOnInit(): void {
    this.mostrarLugares()
  }

}
