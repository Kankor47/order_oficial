import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UsuarioComponent } from 'app/Gerente/usuario/usuario.component';
import { LocalComponent } from 'app/Gerente/local/local.component';
import { TipoPedidoComponent } from 'app/Gerente/tipo-pedido/tipo-pedido.component';
import { TipoUsuarioComponent } from 'app/Gerente/tipo-usuario/tipo-usuario.component';
import { PlatosComponent } from 'app/Gerente/platos/platos.component';
import { EditTipoUsuarioComponent } from 'app/Gerente/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { EditarPlatoComponent } from 'app/Gerente/platos/editar-plato/editar-plato.component';
import { EditLocalComponent } from 'app/Gerente/local/edit-local/edit-local.component';
import { EditUsuarioComponent } from 'app/Gerente/usuario/edit-usuario/edit-usuario.component';
import { CategoriaComponent } from 'app/gerente/categoria/categoria.component';
import { EditarcategoriaComponent } from 'app/gerente/categoria/editarcategoria/editarcategoria.component';
import { CocinaComponent } from '../../empleados/cocina/cocina.component';
import { PedidoEntranteComponent } from '../../empleados/cocina/pedido-entrante/pedido-entrante.component';
import { EstadoPedidoComponent } from '../../empleados/caja/estado-pedido/estado-pedido.component';
import { CajaComponent } from '../../empleados/caja/caja.component';
import { TestComponent } from 'app/Gerente/test/test.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    //ventanas de lista
    { path: 'usuario',        component: UsuarioComponent },
    { path: 'test',        component: TestComponent },
    { path: 'local',          component: LocalComponent },
    { path: 'tipo-pedido',    component: TipoPedidoComponent },
    { path: 'tipo-usuario',   component: TipoUsuarioComponent },
    { path: 'platillo',       component: PlatosComponent },
    { path: 'categoria',      component:CategoriaComponent},

    //Editar
    { path: 'edit-usuario/:id_usuario',     component:EditUsuarioComponent},
    { path: 'edit-tipo-usuario/:id_tipo',   component:EditTipoUsuarioComponent},
    { path: 'edit-tipo-pedido/:id_pedido',  component:EditTipoUsuarioComponent},
    { path: 'edit-platillo/:id_platillo',   component:EditarPlatoComponent},
    { path: 'edit-local/:id_local',         component:EditLocalComponent},
    { path: 'edit-categoria/:id_categoria', component:EditarcategoriaComponent},

      //Caja
      { path: 'caja',         component:CajaComponent},
      { path: 'estado-pedido', component:EstadoPedidoComponent},
  
      //Cocina
      { path: 'cocina',               component:CocinaComponent},
      { path: 'pedido-entrante',      component:PedidoEntranteComponent}
];