import { Component, OnInit } from "@angular/core";
import { LocalI } from "./local.interface";
import { FormGroup, FormControl, Validator } from "@angular/forms";
import { RestService } from "../../../api/rest.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ResponseI } from '../../../modelos/response.interface';
import { AlertasService } from '../../../api/alertas/alertas.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: "app-edit-local",
  templateUrl: "./edit-local.component.html",
  styleUrls: ["./edit-local.component.css"],
})
export class EditLocalComponent implements OnInit {

  local: LocalI;

  editarForm = new FormGroup({
    nombre_local: new FormControl(''),
    direccion_local: new FormControl(''),
    logo_local: new FormControl(''),
    portada_local: new FormControl(''),
    id_local: new FormControl(''),
  });

  constructor(
    private rest: RestService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private alertas:AlertasService
  ) {}

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get("id_local");
    this.rest.getLocalID(id).subscribe((Data) => {
      this.local = Data;
      console.log(Data);
      this.editarForm.setValue({
        'nombre_local': this.local.nombre_local,
        'direccion_local': this.local.direccion_local,
        'logo_local': this.local.logo_local,
        'portada_local': this.local.portada_local,
        'id_local': this.local.id_local,
      });
    });
  }

  postForm(form:LocalI){
    this.rest.putLocal(form).subscribe(Data=>{
      let respuesta:ResponseI = Data;
      if(respuesta.data =="Información actualizada con exito"){
        this.alertas.showSucces('Datos agregados','hecho');
        this.router.navigate(['local']);
      }else{
        this.alertas.showError(respuesta.Result,'Error');
      }
    });
  }
}
