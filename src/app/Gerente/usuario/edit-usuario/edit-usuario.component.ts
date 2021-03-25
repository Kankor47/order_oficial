import { Component, OnInit } from '@angular/core';
import { RestService } from '../../../api/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ListaTipoUsuarioI } from '../../../Gerente/tipo-usuario/listaTipoUsuario.interface';

import { UsuarioI } from '../edit-usuario/usuario.interface';
import { FormGroup,FormControl,Validator} from '@angular/forms';
import { ResponseI } from '../../../modelos/response.interface';

import { LocalI } from '../../local/edit-local/local.interface';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { ListaLocalI } from '../../local/listaLocal.interface';


@Component({
  selector: 'app-edit-usuario',
  templateUrl: './edit-usuario.component.html',
  styleUrls: ['./edit-usuario.component.css']
})
export class EditUsuarioComponent implements OnInit {

  locales:ListaLocalI[];
  tiposUser:ListaTipoUsuarioI[];
  local:LocalI;

  usuario:UsuarioI;
  
  editarForm = new FormGroup({
    cedula: new FormControl(''),
    nombres:new FormControl(''),
    telefono:new FormControl(''),
    direccion:new FormControl(''),
    id_rol:new FormControl(''),
    id_local:new FormControl(''),
    email:new FormControl(''),
    estado:new FormControl(''),
    id_usuario:new FormControl(''),
});

  constructor(private rest:RestService, private router:Router, private activeroute:ActivatedRoute,
    private alertas:AlertasService) { }

  ngOnInit(): void {
    this.rest.getLocal().subscribe(Data=>{
      this.locales=Data;
    })
    this.rest.getTipoUser().subscribe(Data=>{
      this.tiposUser=Data;
    })

    let id = this.activeroute.snapshot.paramMap.get('id_usuario');
    this.rest.getUserID(id).subscribe(Data=>{
      this.usuario=Data;
      this.editarForm.setValue({
        'cedula': this.usuario.cedula,
        'nombres': this.usuario.nombres,
        'telefono': this.usuario.telefono,
        'direccion': this.usuario.direccion,
        'id_rol': this.usuario.id_rol,
        'id_local': this.usuario.id_local,
        'email': this.usuario.email, 
        'estado': this.usuario.estado,
        'id_usuario': this.usuario.id_usuario
      });
      console.log(this.editarForm.value);
    })
  }

  postForm(form:UsuarioI){
    this.rest.putUsuario(form).subscribe(Data=>{
      let respuesta:ResponseI = Data;
      if(respuesta.data =="Información agregada con exito"){
        this.alertas.showSucces('Datos agregados','hecho');
        this.router.navigate(['usuario']);
      }else{
        this.alertas.showError(respuesta.Result,'Error');
      }
    });
  }
}
