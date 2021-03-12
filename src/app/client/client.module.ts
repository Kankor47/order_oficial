import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';

import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientRoutes } from './client.routing';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
      ClientComponent
     
 ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forChild(ClientRoutes)

  ]
})
export class ClientModule { 



}