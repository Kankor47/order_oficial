import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ListaTipoPedidoI } from '../Gerente/tipo-pedido/listaTipoPedido.interface';
import { ListaLocalI } from '../Gerente/local/listaLocal.interface';
import { ListaTipoUsuarioI } from '../Gerente/tipo-usuario/listaTipoUsuario.interface';
import { ListaUsuarioI } from '../Gerente/usuario/listUsuario.interface';
import { UsuarioI } from '../Gerente/usuario/edit-usuario/usuario.interface';
import { LocalI } from '../Gerente/local/edit-local/local.interface';
import { PlatoI } from '../Gerente/platos/editar-plato/plato.interface';
import { TipoPedidoI } from '../Gerente/tipo-pedido/edit-tipo-pedido/tipopedido.interface';
import { TipoUsuarioI } from '../Gerente/tipo-usuario/edit-tipo-usuario/tipousuario.interface';
import { ResponseI } from '../modelos/response.interface';
import { Observable } from 'rxjs';
import { formatCurrency } from '@angular/common';
import { CategoriaI } from '../Gerente/categoria/editarcategoria/categoria.interface';
import { ListaCategoria } from '../Gerente/categoria/listcategoria.interface';
import { DetalleI } from '../empleados/cocina/editar-cocina/detalle.interface';
import { ListaCabeceraI } from '../empleados/cocina/listacabecera.interface';
import { CabeceraI } from '../modelos/cabecera.interface';
import { ListaPlatosI } from '../Gerente/platos/listaplatos.interface';

@Injectable({
  providedIn: 'root'
})
export class RestService {
_url:string="https://order-back3nd.herokuapp.com/api/";
  constructor(private http: HttpClient) { }

  public cargarPlatos(){
    return this.http.get('https://order-back3nd.herokuapp.com/api/get/platillos');
  }

  public getTipoUser():Observable<ListaTipoUsuarioI[]>{
    let direcccion = this._url + "get/rol";
    return this.http.get<ListaTipoUsuarioI[]>(direcccion);
  }

  public getTipoPedido():Observable<ListaTipoPedidoI[]>{
    let direcccion = this._url + "get/tipo_pedido";
    return this.http.get<ListaTipoPedidoI[]>(direcccion);
  }

  public getPlatillo():Observable<ListaPlatosI[]>{
    let direcccion = this._url + "get/platillos";
    return this.http.get<ListaPlatosI[]>(direcccion);
  }

  public getUsuarios():Observable<ListaUsuarioI[]>{
    let direcccion = this._url + "get/usuarios";
    return this.http.get<ListaUsuarioI[]>(direcccion);
  }

  public getLocal():Observable<ListaLocalI[]>{
    let direcccion = this._url + "get/local";
    return this.http.get<ListaLocalI[]>(direcccion);
  }

  public getCabecera():Observable<ListaCabeceraI[]>{
    let direcccion = this._url + "get/pedido";
    return this.http.get<ListaCabeceraI[]>(direcccion);
  }

  public getCategoria():Observable<ListaCategoria[]>{
    let direcccion = this._url+"get/categoria";
    return this.http.get<ListaCategoria[]>(direcccion);
  }

  //buscar por ID
  public getDetalleID(id):Observable<DetalleI>{
    let direcccion = this._url+"get/detalle/"+id;
    return this.http.get<DetalleI>(direcccion);
  }

  public getPedidoID(id):Observable<CabeceraI>{
    let direccion = this._url+"get/pedido/"+id;
    return this.http.get<CabeceraI>(direccion);
  }
  
  public getUserID(id):Observable<UsuarioI>{
    let direcccion = this._url+"get/usuario/"+id;
    return this.http.get<UsuarioI>(direcccion);
  }

  public getTipoUserID(id):Observable<TipoUsuarioI>{
    let direcccion = this._url + "get/rol/"+id;
    return this.http.get<TipoUsuarioI>(direcccion);
  }

  public getTipoPedidoID(id):Observable<TipoPedidoI>{
    let direcccion = this._url + "get/tipo_pedido/"+id;
    return this.http.get<TipoPedidoI>(direcccion);
  }

  public getPlatilloID(id):Observable<PlatoI>{
    let direcccion = this._url + "get/platillo/"+id;
    return this.http.get<PlatoI>(direcccion);
  }

  public getLocalID(id):Observable<LocalI>{
    let direcccion = this._url + "get/local/"+id;
    return this.http.get<LocalI>(direcccion);
  }

  public getCategoriaID(id):Observable<CategoriaI>{
    let direcccion = this._url+"get/categoria/"+id;
    return this.http.get<CategoriaI>(direcccion);
  }

  //metodos actualizar
  public putLocal(form:LocalI):Observable<ResponseI>{
    let direccion = this._url+"put/local";
    return this.http.put<ResponseI>(direccion,form);
  }

  public putPlatillo(form:PlatoI):Observable<ResponseI>{
    let direccion = this._url+"put/platillo";
    return this.http.put<ResponseI>(direccion,form);
  }

  public putTipoPedido(form:TipoPedidoI):Observable<ResponseI>{
    let direccion = this._url+"put/tipo_pedido";
    return this.http.put<ResponseI>(direccion,form);
  }

  public putTipoUser(form:TipoUsuarioI):Observable<ResponseI>{
    let direccion = this._url+"put/rol";
    return this.http.put<ResponseI>(direccion,form);
  }

  public putUsuario(form:UsuarioI):Observable<ResponseI>{
    let direccion = this._url+"put/usuario";
    return this.http.put<ResponseI>(direccion,form);
  }

  public putCategoria(form:CategoriaI):Observable<ResponseI>{
    let direccion = this._url+"put/categoria";
    return this.http.put<ResponseI>(direccion,form);
  }

  //metodos agregar
  public postLocal(form:LocalI):Observable<ResponseI>{
    let direccion = this._url+"post/local";
    return this.http.post<ResponseI>(direccion,form);
  }

  public postPlatillo(form:PlatoI):Observable<ResponseI>{
    let direccion = this._url+"post/platillo";
    return this.http.post<ResponseI>(direccion,form);
  }

  public postTipoPedido(form:TipoPedidoI):Observable<ResponseI>{
    let direccion = this._url+"post/tipo_pedido";
    return this.http.post<ResponseI>(direccion,form);
  }

  public postTipoUser(form:TipoUsuarioI):Observable<ResponseI>{
    let direccion = this._url+"post/rol";
    return this.http.post<ResponseI>(direccion,form);
  }

  public postUsuario(form:UsuarioI):Observable<ResponseI>{
    let direccion = this._url+"post/usuario";
    return this.http.post<ResponseI>(direccion,form);
  }

  public postCategoria(form:CategoriaI):Observable<ResponseI>{
    let direccion= this._url+"post/categoria";
    return this.http.post<ResponseI>(direccion,form);
  }
}
