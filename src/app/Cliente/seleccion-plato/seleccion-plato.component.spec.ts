import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionPlatoComponent } from './seleccion-plato.component';

describe('SeleccionPlatoComponent', () => {
  let component: SeleccionPlatoComponent;
  let fixture: ComponentFixture<SeleccionPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
