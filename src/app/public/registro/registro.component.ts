import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.css"],
})
export class RegistroComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private router : Router
    
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cedula: "",
      nombres: "",
      direccion: "",
      telefono: "",
      email: "",
      password: ""
    });
  }

  submit(){

    const formData = this.form.getRawValue();
    const data= {
      cedula: formData.cedula,
      nombres: formData.nombres,
      direccion: formData.direccion,
      telefono: formData.telefono,
      email: formData.email,
      password:formData.password,
      estado : 'A',
      id_local : 1,
      id_rol : 2
    }
 
    console.log(this.form.getRawValue());
    this.http.post('https://order-back3nd.herokuapp.com/api/post/usuario',data).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/login']);
      }
    )
  }
}
