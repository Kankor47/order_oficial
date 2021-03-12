import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTipoPedidoComponent } from './edit-tipo-pedido.component';

describe('EditTipoPedidoComponent', () => {
  let component: EditTipoPedidoComponent;
  let fixture: ComponentFixture<EditTipoPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTipoPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTipoPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
