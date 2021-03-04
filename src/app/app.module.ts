import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { SymphonyComponent } from './components/proyectos/symphony/symphony.component';
import { PremasComponent } from './components/proyectos/premas/premas.component';
import { ExpressComponent } from './components/proyectos/express/express.component';
import { EmprendedorComponent } from './components/proyectos/emprendedor/emprendedor.component';
import { EquipoComponent } from './components/proyectos/equipo/equipo.component';
import { SeminarioComponent } from './components/proyectos/seminario/seminario.component';
import { TiendaComponent } from './components/proyectos/tienda/tienda.component';
import { VentaComponent } from './components/proyectos/venta/venta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectoComponent,
    ContenedorComponent,
    HabilidadesComponent,
    SymphonyComponent,
    PremasComponent,
    ExpressComponent,
    EmprendedorComponent,
    EquipoComponent,
    SeminarioComponent,
    TiendaComponent,
    VentaComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash:true} ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
