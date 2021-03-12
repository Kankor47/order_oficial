import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoEntranteComponent } from './pedido-entrante.component';

describe('PedidoEntranteComponent', () => {
  let component: PedidoEntranteComponent;
  let fixture: ComponentFixture<PedidoEntranteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidoEntranteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidoEntranteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
