import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {IngresarInformacionComponent} from './ingresar-informacion/ingresar-informacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, IngresarInformacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'prueba-frontend';
}
