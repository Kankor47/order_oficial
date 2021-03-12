import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
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
  
    /*const formData = this.form.getRawValue();
    const data= {
      username:formData.email,
      password:formData.password,
      grant_type : 'password',
      client_id : 2,
      client_secret : 'RCXARwhWxbAPhPVhb3mg7IKJWngVmTkmoZ5cEUzc',
      scope : '*'
    }
*/
    this.http.post('https://order-back3nd.herokuapp.com/api/auth/login',this.form.getRawValue(),{withCredentials:true}).subscribe(
      (result:any) =>{
        localStorage.setItem('token',result.message);
        console.log(result.access_token);
        this.router.navigate(['/secure']);

      },
      error=>{
        console.log('error');
        console.log(error);
      }
    );
  }

}
