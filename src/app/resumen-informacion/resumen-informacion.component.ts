import {Router} from '@angular/router';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-resumen-informacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule,MatFormFieldModule, MatIconModule,MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './resumen-informacion.component.html',
  styleUrl: './resumen-informacion.component.css'
})
export class ResumenInformacionComponent {
  cliente = {
    tipoDocumento: 'Cédula de Ciudadanía',
    numeroDocumento: '23445322',
    primerNombre: 'Juan',
    segundoNombre: 'Carlos',
    primerApellido: 'Pérez',
    segundoApellido: 'Gómez',
    telefono: '3123456789',
    direccion: 'Calle Falsa 123',
    ciudad: 'Bogotá'
  };

  constructor(private router: Router) { }

  volver() {
    this.router.navigate(['/']);
  }

}
