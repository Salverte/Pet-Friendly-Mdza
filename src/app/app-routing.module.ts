import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlojamientoComponent } from './pages/alojamiento/alojamiento.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { GastronomiaComponent } from './pages/gastronomia/gastronomia.component';
import { RecreacionComponent } from './pages/recreacion/recreacion.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
{path: 'contacto', component: ContactoComponent},
{path: 'alojamiento', component: AlojamientoComponent},
{path: 'buscar', component: BuscarComponent },
{path: 'gastronomia', component: GastronomiaComponent},
{path: 'recreacion', component: RecreacionComponent},
{path: '', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
