export interface ListaCabeceraI {
  id_cabecera:number;
  id_usuario:number;
  id_local:number;
  id_tipo_pedido:number;
  estado:string;
  fecha:Date;
  total:number;
  lugar_entrega:string;
  detalle:[
    id_detalle:number,
    id_cabecera:number,
    id_platillo:number,
    nota:string,
    cantidad:number,
    subtotal:string,
  ];
}
