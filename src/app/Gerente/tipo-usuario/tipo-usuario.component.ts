import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../api/rest.service';
import { Router } from '@angular/router';
import { ListaTipoUsuarioI } from '../tipo-usuario/listaTipoUsuario.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tipo-usuario',
  templateUrl: './tipo-usuario.component.html',
  styleUrls: ['./tipo-usuario.component.css']
})
export class TipoUsuarioComponent implements OnInit {
  
  tipos:ListaTipoUsuarioI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id", "tipo","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.dataSource = new MatTableDataSource<ListaTipoUsuarioI>(this.tipos);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllTiposUsuarios();
  }

  public getAllTiposUsuarios(){
    let respo=this.rest.getTipoUser();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaTipoUsuarioI[];
    });
  }

  editarTipoUsuario(id){
    this.router.navigate(['edit-tipo-usuario', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
