import { Component, OnInit } from '@angular/core';
import { LugaresService } from 'src/app/servicios/servicios/lugares.service';

@Component({
  selector: 'app-recreacion',
  templateUrl: './recreacion.component.html',
  styleUrls: ['./recreacion.component.scss']
})
export class RecreacionComponent implements OnInit {

  constructor(
    private lugaresService :LugaresService
  ) { }

  data: any;
  
    mostrarLugares () {
      this.lugaresService.getLugares().subscribe(respuesta => {
        // const result = Object.entries(respuesta).reduce(([key,value])=>{
        // if(value.categoria=="Alojamiento"){
        //   return value
        let recreacion: any=[];
        for (const [key, value] of Object.entries(respuesta)) {
          if ( value.categoria === 'Recreación') {
            recreacion.push(value);
         }}
     
        console.log(recreacion)
         
        console.log(respuesta);
        this.data = recreacion;
      });
    }
    
  ngOnInit(): void {
    this.mostrarLugares()
  }

}
