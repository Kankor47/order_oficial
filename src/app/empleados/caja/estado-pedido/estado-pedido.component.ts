import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestService } from 'app/api/rest.service';
import { ListaCabeceraI } from 'app/empleados/cocina/listacabecera.interface';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/caja", title: "Pedido Entrante", icon: "house", class: "" },
  { path: "/estado-pedido", title: "Pedidos", icon: "list", class: "" },
];

/** Constants used to fill up our data base. */

@Component({
  selector: "app-estado-pedido",
  templateUrl: "./estado-pedido.component.html",
  styleUrls: ["./estado-pedido.component.css"],
})
export class EstadoPedidoComponent implements OnInit {
  menuItems: any[];

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  pedidos:ListaCabeceraI[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id_cabecera","id_usuario","id_tipo_pedido","estado","lugar_entrega"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.dataSource = new MatTableDataSource<ListaCabeceraI>(this.pedidos);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllPedidos();
  }

  public getAllPedidos(){
    let respo=this.rest.getCabecera();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaCabeceraI[];
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
