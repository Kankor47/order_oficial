import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'app/api/rest.service';
import { ListaLocalI } from 'app/Gerente/local/listaLocal.interface';

@Component({
  selector: 'app-seleccion-local',
  templateUrl: './seleccion-local.component.html',
  styleUrls: ['./seleccion-local.component.css']
})
export class SeleccionLocalComponent implements OnInit {

  locales:ListaLocalI[];

  constructor(private rest:RestService, private router:Router) {
    
   }

  ngOnInit(): void {
    this.rest.getLocal().subscribe(Data=>{
      this.locales=Data;
    });
  }

  mover(){
      this.router.navigate(['select-plato']);
  }

}
