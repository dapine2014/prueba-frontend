import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumenInformacionComponent } from './resumen-informacion.component';

describe('ResumenInformacionComponent', () => {
  let component: ResumenInformacionComponent;
  let fixture: ComponentFixture<ResumenInformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumenInformacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumenInformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
