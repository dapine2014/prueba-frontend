import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardHeader} from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-ingresar-informacion',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButtonModule,
    MatCardModule,MatSelectModule,MatInputModule
  ],
  templateUrl:'./ingresar-informacion.component.html',
  styleUrl: 'ingresar-informacion.component.css'
})
export class IngresarInformacionComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]]
    });
  }
  onSubmit() {
    if (this.form.valid) {
      // Aquí puedes manejar la lógica para mostrar la pantalla de resumen
    }
  }
}
