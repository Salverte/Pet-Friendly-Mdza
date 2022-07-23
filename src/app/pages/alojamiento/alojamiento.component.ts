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
      // const result = Object.entries(respuesta).reduce(([key,value])=>{
      // if(value.categoria=="Alojamiento"){
      //   return value
      let alojamientos: any=[];
      for (const [key, value] of Object.entries(respuesta)) {
        if ( value.categoria === 'Alojamiento') {
          alojamientos.push(value);
       }}
   
      console.log(alojamientos)
       
      console.log(respuesta);
      this.data = alojamientos;
    });
  }
  


  //
  //console.log(result) 
    
  
   ngOnInit(): void {
    this.mostrarLugares()
  
  }

}
