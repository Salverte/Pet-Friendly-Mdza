import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardwrapper',
  templateUrl: './cardwrapper.component.html',
  styleUrls: ['./cardwrapper.component.scss']
})
export class CardwrapperComponent implements OnInit {

  constructor() { }

  lugares= [
    {
      imagen:"assets/lugares/parquesanmartin.jpg",
      categoria:"Recreación",
      nombre: "Parque General San Martín",
      contenido: "Info del lugar",
      ubicacion: "Av. Boulogne Sur Mer",
    },

    {
      imagen:"assets/lugares/parquemascotas.jpg",
      categoria:"Recreación",
      nombre: "Parque Central",
      contenido: "Parque de juegos y recreación para canes. Tubos de gateo, plataformas, sube y baja, y puentes, componen el equipamiento especial para ellos.",
      ubicacion: "Av. Carlos Pellegrini - Av Bartolomé Mitre",
    },

    {
      imagen:"assets/lugares/ramanegracafe.jpg",
      categoria:"Gastronomía",
      nombre: "Rama Negra Café",
      contenido: "Nuevo café vintange, hermoso ambiente para disfrutar una tarde, musica, sabores y aromas deliciosos",
      ubicacion: "Av. Belgrano 980",
    },

    {
      imagen:"assets/lugares/chachingobar.jpg",
      categoria:"Gastronomía",
      nombre: "Chachingo",
      contenido: " Craft & Beer. Cervecería artesanal, variedad y calidad.",
      ubicacion: "Av. Aristides Villanueva 338",
    },

    {
      imagen:"assets/lugares/mercadito.jpg",
      categoria:"Gastronomía",
      nombre: "El Mercadito",
      contenido: "Fresh and Friendly. Cuenta con opciones vegetarianas, veganas y sin gluten, para disfrutar acompañado de tu mascota.",
      ubicacion: "Av. Arístides Villanueva y Granaderos",
    },
    
    {
      imagen:"assets/lugares/parkhyatt.jpg",
      categoria:"Alojamiento",
      nombre: "Park Hyatt",
      contenido: "Info del lugar",
      ubicacion: "Av. Chile",
    },

    {
      imagen:"assets/lugares/sheraton.jpg",
      categoria:"Alojamiento",
      nombre: "Sheraton",
      contenido: "Info del lugar",
      ubicacion: "Primitivo de la Reta 989",
    },
  ];

  ngOnInit(): void {
  }

}
