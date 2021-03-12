import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoUsuarioComponent } from './agregar-tipo-usuario.component';

describe('AgregarTipoUsuarioComponent', () => {
  let component: AgregarTipoUsuarioComponent;
  let fixture: ComponentFixture<AgregarTipoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTipoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
