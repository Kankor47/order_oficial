import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPlatoComponent } from './agregar-plato.component';

describe('AgregarPlatoComponent', () => {
  let component: AgregarPlatoComponent;
  let fixture: ComponentFixture<AgregarPlatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPlatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
