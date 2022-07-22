import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//esto se agrego para que funcione el servicio
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CardComponent } from './components/card/card.component';
import { CardwrapperComponent } from './components/cardwrapper/cardwrapper.component';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia.component';
import { RecreacionComponent } from './pages/recreacion/recreacion.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CardComponent,
    CardwrapperComponent,
    GastronomiaComponent,
    RecreacionComponent,
    ContactoComponent,
    AlojamientoComponent,
    BuscarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //acá tmn se agrega para que funcione el servicio
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
