import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { RestService } from 'src/app/api/rest.service';
import { ResponseI } from 'src/app/modelos/response.interface';

import { CategoriaI } from '../editarcategoria/categoria.interface';

@Component({
  selector: 'app-agregarcategoria',
  templateUrl: './agregarcategoria.component.html',
  styleUrls: ['./agregarcategoria.component.css']
})
export class AgregarcategoriaComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre_categoria: new FormControl(''),
    imagen_categoria: new FormControl(''),
    id_categoria:new FormControl(''),
});

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) { }

  ngOnInit(): void {
  }

  agregar(form:CategoriaI){
    this.rest.postCategoria(form).subscribe(Data=>{
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
