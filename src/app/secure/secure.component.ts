import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.css']
})
export class SecureComponent implements OnInit {

 
  messag='no loggin';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

   
    let access_token = localStorage.getItem('token');

    const headers = new HttpHeaders({
      'Authorization': 'Bearer '+ access_token
    });
    this.http.get('https://order-back3nd.herokuapp.com/api/auth/sesion',{headers:headers}).subscribe(
      (result:any)=>{
        this.messag=result.nombres;
      },
      error=>{
        console.log(error);
      }

    )
  }

}
