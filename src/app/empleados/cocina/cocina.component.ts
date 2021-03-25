import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from '../../api/rest.service';
import {MatDialog} from '@angular/material/dialog';
import { EditarCocinaComponent } from './editar-cocina/editar-cocina.component';
import { ListaCabeceraI } from './listacabecera.interface';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent implements AfterViewInit {
  menuItems: any[];
  pedidos:ListaCabeceraI[];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id_cabecera","id_usuario","id_tipo_pedido","estado","lugar_entrega","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router, public dialog: MatDialog) {
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

  editarEstado(id){
    this.router.navigate(['edit-cocina',id]);
  }
}
