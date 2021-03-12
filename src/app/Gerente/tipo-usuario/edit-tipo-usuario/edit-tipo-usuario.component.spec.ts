import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoUsuarioComponent } from './edit-tipo-usuario.component';

describe('EditTipoUsuarioComponent', () => {
  let component: EditTipoUsuarioComponent;
  let fixture: ComponentFixture<EditTipoUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
