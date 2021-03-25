import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { RestService } from 'src/app/api/rest.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { TipoPedidoI } from '../edit-tipo-pedido/tipopedido.interface';


@Component({
  selector: 'app-agregar-tipo-pedido',
  templateUrl: './agregar-tipo-pedido.component.html',
  styleUrls: ['./agregar-tipo-pedido.component.css']
})
export class AgregarTipoPedidoComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre_tipo_pedido: new FormControl(''),
    id_tipo_pedido:new FormControl(''),
});

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) { }

  ngOnInit(): void {
  }

  agregar(form:TipoPedidoI){
    this.rest.postTipoPedido(form).subscribe(Data=>{
      let respuesta:ResponseI = Data;
      if(respuesta.data=="Información agregada con exito"){
        this.alertas.showSucces('Datos Agregados','Hecho');
        window.location.reload();
      }
      else{
        this.alertas.showError('Error','Error');
      }
    });

  }

}
