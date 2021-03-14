import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { LocalI } from '../edit-local/local.interface';
import { ResponseI } from '../../../modelos/response.interface';
import { RestService } from "../../../api/rest.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertasService } from '../../../api/alertas/alertas.service';

@Component({
  selector: 'app-agregar-local',
  templateUrl: './agregar-local.component.html',
  styleUrls: ['./agregar-local.component.css']
})
export class AgregarLocalComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre_local: new FormControl(''),
    direccion_local: new FormControl(''),
    logo_local: new FormControl(''),
    portada_local: new FormControl(''),
    id_local: new FormControl(''),
  });

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) { }

  ngOnInit(): void {
  }

  agregar(form:LocalI){
    
    this.rest.postLocal(form).subscribe(Data=>{
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
