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
  
  data: any;

  mostrarLugares () {
    this.lugaresService.getLugares().subscribe(respuesta => {
      console.log(respuesta);
      this.data = respuesta;
    });
  }


  //const result = Object.values(???????).filter(item => item.categoria === 'alojamiento');
  //console.log(result) 
    
  
   ngOnInit(): void {
    this.mostrarLugares()
  
  }

}
