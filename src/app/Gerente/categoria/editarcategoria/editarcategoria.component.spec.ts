import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcategoriaComponent } from './editarcategoria.component';

describe('EditarcategoriaComponent', () => {
  let component: EditarcategoriaComponent;
  let fixture: ComponentFixture<EditarcategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
