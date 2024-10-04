import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarInformacionComponent } from './ingresar-informacion.component';

describe('IngresarInformacionComponent', () => {
  let component: IngresarInformacionComponent;
  let fixture: ComponentFixture<IngresarInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngresarInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IngresarInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
