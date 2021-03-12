import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { ToastrModule } from 'ngx-toastr';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';


//Cliente Registro

// Cliente Perfil
import { PerfilComponent } from './Cliente/perfil/perfil.component';

//Cliente Hacer Pedido
import { HacerPedidoComponent } from './Cliente/hacer-pedido/hacer-pedido.component';
//Cliente Selecciona Local 
import { SeleccionLocalComponent } from './Cliente/seleccion-local/seleccion-local.component';
//Cliente Seleccionar Plato
import { SeleccionPlatoComponent } from './Cliente/seleccion-plato/seleccion-plato.component';
//Cliente Recuperar Contraseña
import { RecuperarContraseniaComponent } from './Cliente/recuperar-contrasenia/recuperar-contrasenia.component';


//Gerente - Usuario
import { UsuarioComponent } from './Gerente/usuario/usuario.component';
import { EditUsuarioComponent } from './Gerente/usuario/edit-usuario/edit-usuario.component';
import { AgregarUsuarioComponent } from './Gerente/usuario/agregar-usuario/agregar-usuario.component';
//Gerente - Tipo Usuario
import { TipoUsuarioComponent } from './Gerente/tipo-usuario/tipo-usuario.component';
import { EditTipoUsuarioComponent } from './Gerente/tipo-usuario/edit-tipo-usuario/edit-tipo-usuario.component';
import { AgregarTipoUsuarioComponent } from './Gerente/tipo-usuario/agregar-tipo-usuario/agregar-tipo-usuario.component';
//Gerente - Tipo Pedido
import { TipoPedidoComponent } from './Gerente/tipo-pedido/tipo-pedido.component';
import { EditTipoPedidoComponent } from './Gerente/tipo-pedido/edit-tipo-pedido/edit-tipo-pedido.component';
import { AgregarTipoPedidoComponent } from './gerente/tipo-pedido/agregar-tipo-pedido/agregar-tipo-pedido.component';
//Gerente - Reporte
import { ReporteComponent } from './Gerente/reporte/reporte.component';
// Gerente - Local
import { LocalComponent} from './Gerente/local/local.component';
import { EditLocalComponent } from './Gerente/local/edit-local/edit-local.component';
import { AgregarLocalComponent } from './Gerente/local/agregar-local/agregar-local.component';
//Gerente - Platillo
import { PlatosComponent } from './Gerente/platos/platos.component';
import { AgregarPlatoComponent } from './Gerente/platos/agregar-plato/agregar-plato.component';
import { EditarPlatoComponent } from './Gerente/platos/editar-plato/editar-plato.component';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { SecureComponent } from './secure/secure.component';
import { PublicModule } from './public/public.module';
import { CategoriaComponent } from './gerente/categoria/categoria.component';
import { EditarcategoriaComponent } from './gerente/categoria/editarcategoria/editarcategoria.component';
import { AgregarcategoriaComponent } from './gerente/categoria/agregarcategoria/agregarcategoria.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select'; 
import { CocinaComponent } from './empleados/cocina/cocina.component';
import { CajaComponent } from './empleados/caja/caja.component';
import { PedidoEntranteComponent } from './empleados/cocina/pedido-entrante/pedido-entrante.component';
import { EstadoPedidoComponent } from './empleados/caja/estado-pedido/estado-pedido.component';
import { EditarCocinaComponent } from './empleados/cocina/editar-cocina/editar-cocina.component';
import { BrowserModule } from '@angular/platform-browser';
import { ClientComponent } from './client/client.component';
import { TestComponent } from './Gerente/test/test.component';





@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    PublicModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    //Gerente Usuario
    UsuarioComponent,
    EditUsuarioComponent,
    //Gerente Tipo Usuario
    TipoUsuarioComponent,
    EditTipoUsuarioComponent,
    //Gernte Tipo Pedido
    TipoPedidoComponent,
    EditTipoPedidoComponent,
    //Gerente Reporte
    ReporteComponent,
    //Gerente Local
    LocalComponent,
    EditLocalComponent,
    //Gerente Platillo
    AgregarPlatoComponent,
    EditarPlatoComponent,
    PlatosComponent,
    //Cliente Registro 

    //Cliente Perfil
    PerfilComponent,

    //Cliente Seleccionar local
    SeleccionLocalComponent,
    //Cliente Selecciona Plato
    SeleccionPlatoComponent,
    //Cliente Hacer Pedido
    HacerPedidoComponent,
    //Cliente Recuperar Contraseña
    RecuperarContraseniaComponent,

    AgregarUsuarioComponent,
    AgregarTipoPedidoComponent,
    AgregarTipoUsuarioComponent,
    AgregarLocalComponent,
    PlatosComponent,
    AgregarPlatoComponent,
    EditarPlatoComponent,
    SecureComponent,
    CategoriaComponent,
    EditarcategoriaComponent,
    AgregarcategoriaComponent,
    CocinaComponent,
    CajaComponent,
    PedidoEntranteComponent,
    EstadoPedidoComponent,
    EditarCocinaComponent,
    TestComponent,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
