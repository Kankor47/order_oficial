import { Component, OnInit,ViewChild } from '@angular/core';
import { RestService } from '../../api/rest.service';
import { ListaLocalI } from './listaLocal.interface';
import { Router} from '@angular/router';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {
  
  locales:ListaLocalI[];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ["id_local", "nombre_local", "dirección_local","logo_local","portada_local","borrar"];
  dataSource;

  constructor(private rest:RestService, private router:Router) {  
    this.dataSource = new MatTableDataSource<ListaLocalI>(this.locales);
   }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort=this.sort;

    this.getAllLocales();
    
  }

  public getAllLocales(){
    let respo=this.rest.getLocal();
    respo.subscribe(Data=>{
      this.dataSource.data=Data as ListaLocalI[];
    }); 
  }

  editarLocal(id){
    this.router.navigate(['edit-local',id]);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
