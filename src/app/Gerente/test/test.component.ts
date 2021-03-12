import { Component, OnInit } from '@angular/core';
import { RestService } from 'app/api/rest.service';
import { Platillo } from 'app/client/platillo.model';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  platos:Platillo[];

  constructor(private rest:RestService) { }

  ngOnInit(): void {
    this.getAllPlatos();
  }

  public getAllPlatos(){

    this.rest.cargarPlatos().subscribe(
     (pla: Platillo[]) =>{
        this.platos=pla;
      console.log(this.platos);
     }
    )
  
  }
}
