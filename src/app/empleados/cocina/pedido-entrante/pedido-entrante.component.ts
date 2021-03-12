import {Component,OnInit} from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: "/caja", title: "Pedido Entrante", icon: "house", class: "" },
  { path: "/estado-pedido", title: "Pedidos", icon: "list", class: "" },
];

@Component({
  selector: 'app-pedido-entrante',
  templateUrl: './pedido-entrante.component.html',
  styleUrls: ['./pedido-entrante.component.css']
})
export class PedidoEntranteComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
