import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validator} from '@angular/forms';
import { RestService } from '../../../api/rest.service';
import { Router, ActivatedRoute } from '@angular/router';
import { TipoUsuarioI } from './tipousuario.interface';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { ResponseI } from 'src/app/modelos/response.interface';



@Component({
  selector: 'app-edit-tipo-usuario',
  templateUrl: './edit-tipo-usuario.component.html',
  styleUrls: ['./edit-tipo-usuario.component.css']
})
export class EditTipoUsuarioComponent implements OnInit {

  tipo_user:TipoUsuarioI;

  editarForm = new FormGroup({
    nombre_rol: new FormControl(''),
    id_rol: new FormControl(''),
});

  constructor(private rest:RestService, private router:Router, private activeroute:ActivatedRoute, private alertas:AlertasService) { }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get('id_rol');
    this.rest.getTipoUserID(id).subscribe(Data=>{
      this.tipo_user=Data;
      this.editarForm.setValue({
        'nombre_rol': this.tipo_user.nombre_rol,
        'id_rol': this.tipo_user.id_rol,
      });
      console.log(this.editarForm.value);
    })
  }

  postForm(form:TipoUsuarioI){
    this.rest.putTipoUser(form).subscribe(Data=>{
      let respuesta:ResponseI = Data;
      if(respuesta.data =="Información actualizada con exito"){
        this.alertas.showSucces('Datos agregados','hecho');
        this.router.navigate(['tipo-usuario']);
      }else{
        this.alertas.showError(respuesta.Result,'Error');
      }
    });
  }
}