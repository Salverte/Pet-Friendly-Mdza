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

  onSubmit() {
    console.log("Vas re bien");
  }

 //Conseguir el dato de lo que tipeo el usuario
  //   const { termino }= this.busquedaForm.value;

  //   this.lugaresService.findLugares(termino).subscribe(lugares => {
  //     console.log('Resultados', lugares);
  //   });
  // }


  ngOnInit(): void {
  }

}