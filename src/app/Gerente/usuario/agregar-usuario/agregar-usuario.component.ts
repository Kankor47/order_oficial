import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../api/rest.service';
import {Router} from '@angular/router';
import { ListaTipoUsuarioI } from '../../../Gerente/tipo-usuario/listaTipoUsuario.interface';

import { UsuarioI } from '../edit-usuario/usuario.interface';

import { FormControl, FormGroup } from '@angular/forms';
import { ListaLocalI } from '../../local/listaLocal.interface';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { ResponseI } from 'src/app/modelos/response.interface';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

  locales:ListaLocalI[];
  tiposUser:ListaTipoUsuarioI[];

  nuevoForm = new FormGroup({
    cedula: new FormControl(''),
    nombres:new FormControl(''),
    telefono:new FormControl(''),
    direccion:new FormControl(''),
    id_rol:new FormControl(''),
    id_local:new FormControl(''),
    email:new FormControl(''),
    password:new FormControl(''),
    estado:new FormControl(''),
    id_usuario:new FormControl(''),
});

  constructor(private router:Router, private rest:RestService, private alertas:AlertasService) { 
    this.rest.getLocal().subscribe(Data=>{
      this.locales=Data;
    })
    this.rest.getTipoUser().subscribe(Data=>{
      this.tiposUser=Data;
    })
  }

  ngOnInit(): void {
  }

  agregar(form:UsuarioI){
    
    this.rest.postUsuario(form).subscribe(Data=>{
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
