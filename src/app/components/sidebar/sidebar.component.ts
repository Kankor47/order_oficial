import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/admin', title: 'Escritorio',  icon: 'dashboard', class: '' },
    { path: '/usuario', title: 'Usuario',  icon:'person', class: '' },
    { path: '/tipo-usuario', title: 'Tipo de Usuario', icon:'assignment_ind', class:''},
    { path: '/local', title: 'Local',  icon:'home', class: '' },
    { path: '/platillo', title: 'Platillo',  icon:'restaurant', class: '' },
    { path: '/tipo-pedido', title: 'Tipo Pedido',  icon:'delivery_dining', class: '' },
    { path: '/categoria', title: 'Categoria',  icon:'category', class: '' },  
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
