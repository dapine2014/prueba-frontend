import { Routes } from '@angular/router';
import {ResumenInformacionComponent} from './resumen-informacion/resumen-informacion.component';
import {IngresarInformacionComponent} from './ingresar-informacion/ingresar-informacion.component';

export const routes: Routes = [ { path: '', component: IngresarInformacionComponent }, // Pantalla de ingreso
                                { path: 'resumen', component: ResumenInformacionComponent }, // Pantalla de resumen
                                { path: '**', redirectTo: '' }];
