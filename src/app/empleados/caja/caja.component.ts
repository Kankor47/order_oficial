import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { Router } from "@angular/router";
import { RestService } from "app/api/rest.service";
import { ListaPlatosI } from "app/Gerente/platos/ListaPlatos.interface";

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

@Component({
  selector: "app-caja",
  templateUrl: "./caja.component.html",
  styleUrls: ["./caja.component.css"],
})
export class CajaComponent implements OnInit {

  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }

  menuItems: any[];

  platos:ListaPlatosI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id","id_user","estado","detalle","subtotal","total","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.dataSource = new MatTableDataSource<ListaPlatosI>(this.platos);
    this.rest.getPlatillo().subscribe(Data=>{
      this.platos=Data;
    })
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.getAllPlatos();
  }

  public getAllPlatos(){
    let respo=this.rest.getPlatillo();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaPlatosI[];
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  editarEstado(id){
    this.router.navigate(['edit-cocina',id]);
  }
  
}
