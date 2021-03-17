export interface CabeceraI {
  id_cabecera: string;
  id_usuario: string;
  id_local: string;
  id_tipo_pedido: string;
  estado: string;
  fecha: string;
  total: string;
  lugar_entrega: string;
  detalle: [
    id_detalle: string,
    id_cabecera: string,
    id_platillo: string,
    nota: string,
    cantidad: string,
    subtotal: string
  ];
}
