import {Component, numberAttribute, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatCard, MatCardActions, MatCardHeader} from '@angular/material/card';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {Router} from '@angular/router';
import {ApiService} from '../api.service';
import {Observable} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {Cliente} from '../core/interface/cliente';


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

export class IngresarInformacionComponent implements OnInit{
  form: FormGroup;
  // @ts-ignore
  cliente: Cliente;
  status: boolean = true;



  constructor(private fb: FormBuilder,private router: Router, private api: ApiService) {
    this.form = this.fb.group({
      tipoDocumento: ['', Validators.required],
      numeroDocumento: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]]
    });
  }

  ngOnInit(): void {
    // Inicialice sus variables y haga cualquier otra configuración que necesite aquí.
  }

  getData( tipo: string, documento: string) {
    this.api.getCliente(tipo, documento).subscribe({
      next: (data: any) => {
              this.cliente = data;
              this.router.navigate(['/resumen'],{state:{cliente:this.cliente}});
            },
      error: (error: HttpErrorResponse) => {
               this.status = false;
               console.log("ERROR EB LA CONSULTA", error);
               alert("ERROR EN LA CONSULTA ");
            }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Formulario enviado', this.form.value);
      this.getData(this.form.value.tipoDocumento, this.form.value.numeroDocumento);

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
