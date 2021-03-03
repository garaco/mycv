import {Routes } from '@angular/router';
import { InicioComponent } from '../app/components/inicio/inicio.component';
import { ProyectoComponent } from '../app/components/proyecto/proyecto.component';
import { HabilidadesComponent } from '../app/components/habilidades/habilidades.component';

export const ROUTES: Routes = [
   { path:'inicio', component:InicioComponent },
   { path:'proyectos', component:ProyectoComponent },
   { path:'habilidades', component:HabilidadesComponent },
   { path:'', pathMatch:'full', redirectTo:'inicio' },
   { path:'**', pathMatch:'full', redirectTo:'inicio' } 
 ];