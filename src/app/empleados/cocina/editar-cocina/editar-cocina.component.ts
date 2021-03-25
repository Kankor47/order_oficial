import { Component, OnInit, Input } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";

import * as printJS from 'print-js';
import { RestService } from "src/app/api/rest.service";
import { CabeceraI } from "src/app/modelos/cabecera.interface";
import { ListaDetalleI } from "src/app/modelos/listaDetalle.interfaec";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: "app-editar-cocina",
  templateUrl: "./editar-cocina.component.html",
  styleUrls: ["./editar-cocina.component.css"],
})
export class EditarCocinaComponent implements OnInit {

  cabecera: CabeceraI;

  detalles: ListaDetalleI[];

  editarForm = new FormGroup({
    id_usuario:new FormControl(''),
    id_local:new FormControl(''),
    id_tipo_pedido:new FormControl(''),
    lugar_entrega:new FormControl(''),
    estado:new FormControl(''),
    fecha:new FormControl(''),
    total:new FormControl(''),
    id_cabecera:new FormControl(''),
});

  displayedColumns: string[] = ["id_platillo", "cantidad", "nota"];
  dataSource;

  constructor(private rest: RestService, private activeroute: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<ListaDetalleI>(this.detalles);
  }

  ngOnInit(): void {
    let id_cab = this.activeroute.snapshot.paramMap.get("id_cabecera");
    this.getAllDetallePedido(id_cab);
    this.rest.getPedidoID(id_cab).subscribe(Data=>{
      this.cabecera=Data;
      this.editarForm.setValue({

        'id_usuario': this.cabecera.id_usuario,
        'id_local': this.cabecera.id_local,
        'id_tipo_pedido': this.cabecera.id_tipo_pedido,
        'lugar_entrega': this.cabecera.lugar_entrega,
        'estado': this.cabecera.estado,
        'fecha': this.cabecera.fecha,
        'total': this.cabecera.total,
        'id_cabecera': this.cabecera.id_cabecera
      });
    }) 
  }

  public getAllDetallePedido(id) {
    let re = this.rest.getDetalleID(id);
    re.subscribe(Data => {
      this.dataSource.data = Data;
    });
  }

  imprimir(){
    printJS('imprimir', 'html');
  }
}
