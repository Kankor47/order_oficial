import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { RestService } from 'app/api/rest.service';
import { ListaPlatosI } from 'app/Gerente/platos/ListaPlatos.interface';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/cocina', title: 'Escritorio',  icon: 'dashboard', class: '' },
];


@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements AfterViewInit {
  menuItems: any[];

  platos:ListaPlatosI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id","nombre_categoria","nombre_local","nombre","ingredientes",	"costo","imagen","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.dataSource = new MatTableDataSource<ListaPlatosI>(this.platos);
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
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

  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
};

}
