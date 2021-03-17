import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'app/api/rest.service';
import { ListaCabeceraI } from './listacabecera.interface';
import {MatDialog} from '@angular/material/dialog';
import { CabeceraI } from './editar-cocina/cabecera.interface';
import { FormControl, FormGroup } from '@angular/forms';
import { ResponseI } from 'app/modelos/response.interface';
import { AlertasService } from 'app/api/alertas/alertas.service';
import { EditarCocinaComponent } from './editar-cocina/editar-cocina.component';

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

  constructor(private rest:RestService, private router:Router) {
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
