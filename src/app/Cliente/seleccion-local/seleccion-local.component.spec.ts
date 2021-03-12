import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleccionLocalComponent } from './seleccion-local.component';

describe('SeleccionLocalComponent', () => {
  let component: SeleccionLocalComponent;
  let fixture: ComponentFixture<SeleccionLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeleccionLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
