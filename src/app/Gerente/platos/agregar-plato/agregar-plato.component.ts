import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { RestService } from 'src/app/api/rest.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ListaCategoria } from '../../categoria/listcategoria.interface';
import { ListaLocalI } from '../../local/listaLocal.interface';

import { PlatoI } from '../editar-plato/plato.interface';

@Component({
  selector: 'app-agregar-plato',
  templateUrl: './agregar-plato.component.html',
  styleUrls: ['./agregar-plato.component.css']
})
export class AgregarPlatoComponent implements OnInit {

  locales:ListaLocalI[];
  categorias:ListaCategoria[];


  nuevoForm = new FormGroup({
    id_categoria:new FormControl(''),
    id_local:new FormControl(''),
    nombre_platillo:new FormControl(''),
    ingredientes:new FormControl(''),
    costo:new FormControl(''),
    imagen:new FormControl(''),
    id_platillo:new FormControl(''),
  });

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) {
    this.rest.getLocal().subscribe(Data=>{
      this.locales=Data;
    })
    this.rest.getCategoria().subscribe(Data=>{
      this.categorias=Data;
    });
   }

  ngOnInit(): void {
  }
  agregar(form:PlatoI){
    this.rest.postPlatillo(form).subscribe(Data=>{
      console.log(Data);
      let respuesta:ResponseI = Data;
      if(respuesta.data=="Información agregada con exito"){
        this.alertas.showSucces('Datos Agregados','Hecho');
        window.location.reload();
      }
      else{
        this.alertas.showError('Error','Error');
      }
    });
  }

}
