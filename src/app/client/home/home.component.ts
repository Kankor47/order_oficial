import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'app/api/rest.service';
import { ListaPlatosI } from 'app/Gerente/platos/ListaPlatos.interface';
import { Platillo } from '../platillo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  platos:Platillo[];

  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getAllPlatos();
  }

  public getAllPlatos(){

    this.rest.cargarPlatos().subscribe(
     (pla: Platillo[]) =>{
        this.platos=pla;
      console.log(this.platos);
     }
    )
  
  }

}
