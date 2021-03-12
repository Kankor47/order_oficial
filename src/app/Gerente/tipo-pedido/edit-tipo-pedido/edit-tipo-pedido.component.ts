import { Component, OnInit } from '@angular/core';
import { TipoPedidoI } from './tipopedido.interface';
import { FormGroup,FormControl,Validator} from '@angular/forms';
import { RestService } from '../../../api/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ResponseI } from 'app/modelos/response.interface';
import { AlertasService } from 'app/api/alertas/alertas.service';

@Component({
  selector: 'app-edit-tipo-pedido',
  templateUrl: './edit-tipo-pedido.component.html',
  styleUrls: ['./edit-tipo-pedido.component.css']
})
export class EditTipoPedidoComponent implements OnInit {

  pedido:TipoPedidoI;

  editarForm = new FormGroup({
    deta_pedido: new FormControl(''),
    id_pedido:new FormControl(''),
});

  constructor(private rest:RestService, private router:Router, private activeroute:ActivatedRoute, private alertas:AlertasService) { }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get('id_pedido');
    this.rest.getTipoPedidoID(id).subscribe(Data=>{
      this.pedido=Data;
      this.editarForm.setValue({
        'deta_pedido': this.pedido.deta_pedido,
        'id_pedido': this.pedido.id_pedido,
      });
      
    }) 
  }

  postForm(form:TipoPedidoI){
    this.rest.putTipoPedido(form).subscribe(Data=>{
      let resp:ResponseI=Data;
      if(resp.data=="Información agregada con exito"){
        this.alertas.showSucces('Datos Agregados','Hecho');
        this.router.navigate(['tipo-pedido']);
      }
      else
      {
        this.alertas.showError('Error datos no actualizados','Error');
      }
    });
  }
}
