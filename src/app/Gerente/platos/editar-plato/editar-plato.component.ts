import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertasService } from 'src/app/api/alertas/alertas.service';
import { RestService } from 'src/app/api/rest.service';
import { ResponseI } from 'src/app/modelos/response.interface';
import { ListaCategoria } from '../../categoria/listcategoria.interface';
import { ListaLocalI } from '../../local/listaLocal.interface';

import { PlatoI } from './plato.interface';

@Component({
  selector: 'app-editar-plato',
  templateUrl: './editar-plato.component.html',
  styleUrls: ['./editar-plato.component.css']
})
export class EditarPlatoComponent implements OnInit {

  plato:PlatoI;
  locales:ListaLocalI[];
  categorias:ListaCategoria[];

  editarForm = new FormGroup({
    
    id_categoria:new FormControl(''),
    id_local:new FormControl(''),
    nombre_platillo:new FormControl(''),
    ingredientes:new FormControl(''),
    costo:new FormControl(''),
    imagen:new FormControl(''),
    id_platillo:new FormControl(''),
  });

  constructor(private rest: RestService,
    private router: Router,
    private activeroute: ActivatedRoute,
    private alertas:AlertasService) {
      this.rest.getLocal().subscribe(Data=>{
        this.locales=Data;
      })
      this.rest.getCategoria().subscribe(Data=>{
        this.categorias=Data;
      });
     }

  ngOnInit(): void {
    let id = this.activeroute.snapshot.paramMap.get("id_platillo");
    this.rest.getPlatilloID(id).subscribe((Data) => {
      this.plato = Data;
      this.editarForm.setValue({
        'id_categoria':this.plato.id_categoria,
        'id_local':this.plato.id_local,
        'nombre_platillo':this.plato.nombre_platillo,
        'ingredientes':this.plato.ingredientes,
        'costo':this.plato.costo,
        'imagen':this.plato.imagen,
        'id_platillo':this.plato.id_platillo,
      });
    });
  }

  postForm(form:PlatoI){
    this.rest.putPlatillo(form).subscribe(Data=>{
      let respuesta:ResponseI = Data;
      if(respuesta.data =="Información actualizada con exito"){
        this.alertas.showSucces('Datos agregados','hecho');
        this.router.navigate(['platillo']);
      }else{
        this.alertas.showError(respuesta.Result,'Error');
      }
    });
  }

}
