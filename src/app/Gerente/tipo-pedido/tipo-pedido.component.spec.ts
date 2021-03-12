import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoPedidoComponent } from './tipo-pedido.component';

describe('TipoPedidoComponent', () => {
  let component: TipoPedidoComponent;
  let fixture: ComponentFixture<TipoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
