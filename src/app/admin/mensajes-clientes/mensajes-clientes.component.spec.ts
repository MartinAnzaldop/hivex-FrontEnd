import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesClientesComponent } from './mensajes-clientes.component';

describe('MensajesClientesComponent', () => {
  let component: MensajesClientesComponent;
  let fixture: ComponentFixture<MensajesClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensajesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
