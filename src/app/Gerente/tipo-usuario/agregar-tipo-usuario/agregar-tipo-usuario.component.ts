import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { RestService } from 'src/app/api/rest.service';
import { ResponseI } from 'src/app/modelos/response.interface';

import { TipoUsuarioI } from '../edit-tipo-usuario/tipousuario.interface';

@Component({
  selector: 'app-agregar-tipo-usuario',
  templateUrl: './agregar-tipo-usuario.component.html',
  styleUrls: ['./agregar-tipo-usuario.component.css']
})
export class AgregarTipoUsuarioComponent implements OnInit {

  nuevoForm = new FormGroup({
    nombre_rol: new FormControl(''),
    id_rol: new FormControl(''),
});

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) { }

  ngOnInit(): void {
  }

  agregar(form:TipoUsuarioI){
    this.rest.postTipoUser(form).subscribe(Data=>{
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
