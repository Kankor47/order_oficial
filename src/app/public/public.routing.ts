import { Routes } from '@angular/router';
import { HacerPedidoComponent } from 'app/Cliente/hacer-pedido/hacer-pedido.component';
import { PerfilComponent } from 'app/Cliente/perfil/perfil.component';

import { SeleccionLocalComponent } from 'app/Cliente/seleccion-local/seleccion-local.component';
import { SeleccionPlatoComponent } from 'app/Cliente/seleccion-plato/seleccion-plato.component';
import { CajaComponent } from 'app/empleados/caja/caja.component';
import { CategoriaComponent } from 'app/gerente/categoria/categoria.component';
import { EditarcategoriaComponent } from 'app/gerente/categoria/editarcategoria/editarcategoria.component';
import { EditLocalComponent } from 'app/Gerente/local/edit-local/edit-local.component';
import { LocalComponent } from 'app/Gerente/local/local.component';
import { EditarPlatoComponent } from 'app/Gerente/platos/editar-plato/editar-plato.component';
import { PlatosComponent } from 'app/Gerente/platos/platos.component';
import { EditTipoPedidoComponent } from 'app/Gerente/tipo-pedido/edit-tipo-pedido/edit-tipo-pedido.component';
import { TipoPedidoComponent } from 'app/Gerente/tipo-pedido/tipo-pedido.component';
import { EditTipoUsuarioComponent } from 'app/Gerente/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { TipoUsuarioComponent } from 'app/Gerente/tipo-usuario/tipo-usuario.component';
import { EditUsuarioComponent } from 'app/Gerente/usuario/edit-usuario/edit-usuario.component';
import { UsuarioComponent } from 'app/Gerente/usuario/usuario.component';
import { AdminLayoutComponent } from 'app/layouts/admin-layout/admin-layout.component';
import { SecureComponent } from 'app/secure/secure.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CocinaComponent } from '../empleados/cocina/cocina.component';
import { PedidoEntranteComponent } from '../empleados/cocina/pedido-entrante/pedido-entrante.component';
import { EstadoPedidoComponent } from '../empleados/caja/estado-pedido/estado-pedido.component';
import { HomeComponent } from 'app/client/home/home.component';
import { TestComponent } from 'app/Gerente/test/test.component';

export const PublicRoutes: Routes = [
    { path: 'home',       component: HomeComponent},
    { path: 'registro',       component: RegistroComponent},
    { path: 'login',          component: LoginComponent},
    { path: 'secure',         component: SecureComponent},
    { path: 'admin',          component: AdminLayoutComponent},
    { path: 'usuario',        component: UsuarioComponent },
    { path: 'local',          component: LocalComponent },
    { path: 'tipo-pedido',    component: TipoPedidoComponent },
    { path: 'tipo-usuario',   component: TipoUsuarioComponent },
    { path: 'platillo',       component: PlatosComponent },
    { path: 'categoria',      component: CategoriaComponent},
    { path: 'test',        component: TestComponent },

    //Editar
    { path: 'edit-usuario/:id_usuario',     component:EditUsuarioComponent},
    { path: 'edit-tipo-usuario/:id_rol',    component:EditTipoUsuarioComponent},
    { path: 'edit-tipo-pedido/:id_pedido',  component:EditTipoPedidoComponent},
    { path: 'edit-platillo/:id_platillo',   component:EditarPlatoComponent},
    { path: 'edit-local/:id_local',         component:EditLocalComponent},
    { path: 'edit-categoria/:id_categoria', component:EditarcategoriaComponent},

    //Cliente
    { path: 'selec-local',            component:SeleccionLocalComponent},
    { path: 'select-plato',           component:SeleccionPlatoComponent},

    { path: 'perfil',                 component:PerfilComponent},
    { path: 'hacer-pedido',           component:HacerPedidoComponent},

    //Caja
    { path: 'caja',         component:CajaComponent},
    { path: 'estado-pedido', component:EstadoPedidoComponent},

    //Cocina
    { path: 'cocina',               component:CocinaComponent},
    { path: 'pedido-entrante',      component:PedidoEntranteComponent}
]