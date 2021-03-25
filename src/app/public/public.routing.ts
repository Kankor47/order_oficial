import { Routes } from '@angular/router';
import { CajaComponent } from '../empleados/caja/caja.component';
import { CategoriaComponent } from '../Gerente/categoria/categoria.component';
import { EditarcategoriaComponent } from '../Gerente/categoria/editarcategoria/editarcategoria.component';
import { EditLocalComponent } from '../Gerente/local/edit-local/edit-local.component';
import { LocalComponent } from '../Gerente/local/local.component';
import { EditarPlatoComponent } from '../Gerente/platos/editar-plato/editar-plato.component';
import { PlatosComponent } from '../Gerente/platos/platos.component';
import { EditTipoPedidoComponent } from '../Gerente/tipo-pedido/edit-tipo-pedido/edit-tipo-pedido.component';
import { TipoPedidoComponent } from '../Gerente/tipo-pedido/tipo-pedido.component';
import { EditTipoUsuarioComponent } from '../Gerente/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { TipoUsuarioComponent } from '../Gerente/tipo-usuario/tipo-usuario.component';
import { EditUsuarioComponent } from '../Gerente/usuario/edit-usuario/edit-usuario.component';
import { UsuarioComponent } from '../Gerente/usuario/usuario.component';
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { SecureComponent } from '../secure/secure.component';
import { LoginComponent } from './login/login.component';
import { CocinaComponent } from '../empleados/cocina/cocina.component';
import { EstadoPedidoComponent } from '../empleados/caja/estado-pedido/estado-pedido.component';
import { EditarCajaComponent } from '../empleados/caja/editar-caja/editar-caja.component';
import { EditarCocinaComponent } from '../empleados/cocina/editar-cocina/editar-cocina.component';


export const PublicRoutes: Routes = [
    { path: 'login',          component: LoginComponent},
    { path: 'secure',         component: SecureComponent},
    { path: 'admin',          component: AdminLayoutComponent},
    { path: 'usuario',        component: UsuarioComponent },
    { path: 'local',          component: LocalComponent },
    { path: 'tipo-pedido',    component: TipoPedidoComponent },
    { path: 'tipo-usuario',   component: TipoUsuarioComponent },
    { path: 'platillo',       component: PlatosComponent },
    { path: 'categoria',      component: CategoriaComponent},

    //Editar
    { path: 'edit-usuario/:id_usuario',     component:EditUsuarioComponent},
    { path: 'edit-tipo-usuario/:id_rol',    component:EditTipoUsuarioComponent},
    { path: 'edit-tipo-pedido/:id_tipo_pedido',  component:EditTipoPedidoComponent},
    { path: 'edit-platillo/:id_platillo',   component:EditarPlatoComponent},
    { path: 'edit-local/:id_local',         component:EditLocalComponent},
    { path: 'edit-categoria/:id_categoria', component:EditarcategoriaComponent},

    //Caja
    { path: 'caja',         component:CajaComponent},
    { path: 'estado-pedido', component:EstadoPedidoComponent},
    { path: 'editar-caja/:id_cabecera', component:EditarCajaComponent},

    //Cocina
    { path: 'cocina',               component:CocinaComponent},
    { path: 'edit-cocina/:id_cabecera',          component:EditarCocinaComponent},
]