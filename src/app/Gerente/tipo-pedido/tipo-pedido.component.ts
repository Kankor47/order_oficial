import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../api/rest.service';
import { ListaTipoPedidoI } from './listaTipoPedido.interface';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tipo-pedido',
  templateUrl: './tipo-pedido.component.html',
  styleUrls: ['./tipo-pedido.component.css']
})
export class TipoPedidoComponent implements OnInit {

  tipos_pedido:ListaTipoPedidoI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id", "tipo","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.dataSource = new MatTableDataSource<ListaTipoPedidoI>(this.tipos_pedido)
   }

   ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.getAllTiposPedido();
  }

  public getAllTiposPedido(){
    let respo=this.rest.getTipoPedido();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaTipoPedidoI[];
    });
  }

  editarTipoPedido(id){
    this.router.navigate(['edit-tipo-pedido', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
