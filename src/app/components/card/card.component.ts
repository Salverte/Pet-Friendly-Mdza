import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  
  imagen = "assets/lugares/parquesanmartin.jpg"
  nombre ="Parque";
  categoria = "Recreación";
  contenido = "Info del lugar";
  ubicacion = "Parque General San Martín";

  ngOnInit(): void {
  }

}
