import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';

import { LugaresService } from 'src/app/servicios/servicios/lugares.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {
  // Acá declaramos en formulario, Indicando los campos que tiene.
  busquedaForm = new FormGroup({
    termino: new FormControl(),
  });



  constructor(
    private lugaresService: LugaresService
  ) { }
  mostrarFiltrados = false
  data : any

  onSubmit() {
    console.log("Vas re bien");
    const {termino} = this.busquedaForm.value;
    this.lugaresService.getLugares().subscribe(respuesta => {
      console.log (respuesta);
      let filtrados = []
      for (const [key, value] of Object.entries(respuesta)) {
        if ( value.nombre.includes(termino)) {
          filtrados.push(value);
          
       }}
       console.log(filtrados);
       this.data = filtrados;
       this.mostrarFiltrados = true;

    });
  }

 

  ngOnInit(): void {
  }

}