import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input()  imagen? = "assets/lugares/parquesanmartin.jpg";
  @Input() categoria: string | undefined;
  @Input() nombre: string | undefined;
  @Input() contenido: string | undefined;
  @Input() ubicacion: string | undefined;
  


  
  // imagen = "assets/lugares/parquesanmartin.jpg"
  // nombre ="Parque";
  // categoria = "Recreación";
  // contenido = "Info del lugar";
  // ubicacion = "Parque General San Martín";

  ngOnInit(): void {
  }

}
