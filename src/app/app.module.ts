import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ProyectoComponent,
    ContenedorComponent,
    HabilidadesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, {useHash:true} ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
