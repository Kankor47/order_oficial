import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertasService } from "app/api/alertas/alertas.service";
import { RestService } from "app/api/rest.service";
import { ResponseI } from "app/modelos/response.interface";
import { CabeceraI } from "./cabecera.interface";

@Component({
  selector: "app-editar-cocina",
  templateUrl: "./editar-cocina.component.html",
  styleUrls: ["./editar-cocina.component.css"],
})
export class EditarCocinaComponent implements OnInit {
  menuItems: any[];
  cabecera: CabeceraI[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id_cabecera","id_usuario","id_tipo_pedido","estado","lugar_entrega"];
  dataSource;

  constructor(private rest: RestService, private router: Router, private activeroute: ActivatedRoute, private alertas: AlertasService) {
    this.dataSource = new MatTableDataSource<CabeceraI>(this.cabecera);
  }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get('id_cabecera');
    this.getPedido(id)
  }

  public getPedido(id){
    let respo=this.rest.getCabeceraID(id);
    respo.subscribe(Data=>{
      this.dataSource.data=Data as CabeceraI;
    });
  }
}
