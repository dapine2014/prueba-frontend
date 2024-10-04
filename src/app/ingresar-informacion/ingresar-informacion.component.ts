import {Component, numberAttribute} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardHeader} from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';


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

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]]
    });
  }


  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
      this.router.navigate(['/resumen']);
    }
  }

  onlyNumberKey({event}: { event: any }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  protected readonly numberAttribute = numberAttribute;
}
