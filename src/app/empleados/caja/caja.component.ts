import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core";

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
  selector: "app-caja",
  templateUrl: "./caja.component.html",
  styleUrls: ["./caja.component.css"],
})
export class CajaComponent implements OnInit {
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
