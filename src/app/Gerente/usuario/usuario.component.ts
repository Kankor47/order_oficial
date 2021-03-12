import { Component, OnInit, ViewChild } from '@angular/core';
import { RestService } from '../../api/rest.service';
import { Router } from '@angular/router';
import { ListaUsuarioI } from '../usuario/listUsuario.interface';
import { ListaTipoUsuarioI } from '../tipo-usuario/listaTipoUsuario.interface';
import { ListaLocalI } from '../local/listaLocal.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios:ListaUsuarioI[];
  tipos:ListaTipoUsuarioI[];
  locales:ListaLocalI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id_usuario", "cedula", "nombre", "direccion","telefono","nombre_tipo","nombre_local","estado","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {
    this.dataSource = new MatTableDataSource<ListaUsuarioI>(this.usuarios);
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;
    this.getAllUsuarios();
    this.rest.getLocal().subscribe(Data=>{
      this.locales=Data;
    });
    this.rest.getTipoUser().subscribe(Data=>{
      this.tipos=Data;
    });
  }

  public getAllUsuarios(){
    let respo=this.rest.getUsuarios();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaUsuarioI[];
    });
  }

  editarUsuario(id){
    this.router.navigate(['edit-usuario', id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
