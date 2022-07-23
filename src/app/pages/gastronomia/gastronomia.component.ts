import { Component, OnInit } from '@angular/core';

import { LugaresService } from 'src/app/servicios/servicios/lugares.service';

@Component({
  selector: 'app-gastronomia',
  templateUrl: './gastronomia.component.html',
  styleUrls: ['./gastronomia.component.scss']
})
export class GastronomiaComponent implements OnInit {

  constructor(
    private lugaresService :LugaresService
  ) { }

  data: any;
  
    mostrarLugares () {
      this.lugaresService.getLugares().subscribe(respuesta => {
        // const result = Object.entries(respuesta).reduce(([key,value])=>{
        // if(value.categoria=="Alojamiento"){
        //   return value
        let gastronomia: any=[];
        for (const [key, value] of Object.entries(respuesta)) {
          if ( value.categoria === 'Gastronomía') {
            gastronomia.push(value);
         }}
     
        console.log(gastronomia)
         
        console.log(respuesta);
        this.data = gastronomia;
      });
    }
    
  ngOnInit(): void {
    this.mostrarLugares()
  }

}


    
  
  
    //
    //console.log(result) 
      
    
  
  
  