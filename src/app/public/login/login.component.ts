import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   form: FormGroup;


  constructor(
    private fb: FormBuilder, 
    private http: HttpClient,
    private router : Router) { }

  ngOnInit(): void {
    this.form = this.fb.group(
      {
        email:'',
        password:''
      }
    )
  }

  submit(){
    let rol;
    this.http.post('https://order-back3nd.herokuapp.com/api/auth/login',this.form.getRawValue(),{withCredentials:true}).subscribe(
      (result:any) =>{
       // localStorage.setItem('token',result.message);
        //console.log(result.access_token);
        const headers = new HttpHeaders({
          'Authorization': 'Bearer '+ result.message
        });
        this.http.get('https://order-back3nd.herokuapp.com/api/auth/sesion',{headers:headers}).subscribe(
          (result:any)=>{
           
            console.log(result);
            if(result.id_rol==1){
              this.router.navigate(['/admin']);
            }else if( result.id_rol==3){
              this.router.navigate(['/caja']);
            }else{
              this.router.navigate(['/cocina']);
            }
           
          },
          error=>{
            console.log(error);
          }
        )
      },
      error=>{
        console.log('error');
        console.log(error);
      }
    );
  }
}
