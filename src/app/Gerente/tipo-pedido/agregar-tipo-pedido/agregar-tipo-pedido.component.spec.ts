import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoPedidoComponent } from './agregar-tipo-pedido.component';

describe('AgregarTipoPedidoComponent', () => {
  let component: AgregarTipoPedidoComponent;
  let fixture: ComponentFixture<AgregarTipoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTipoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarTipoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
