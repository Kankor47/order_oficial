import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCocinaComponent } from './editar-cocina.component';

describe('EditarCocinaComponent', () => {
  let component: EditarCocinaComponent;
  let fixture: ComponentFixture<EditarCocinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCocinaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarCocinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
