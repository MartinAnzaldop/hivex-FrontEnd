import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AgregarProductoComponent } from './admin/agregar-producto/agregar-producto.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { EmpresasComponent } from './admin/empresas/empresas.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { NavvComponent } from './admin/navv/navv.component';
import { AdminModule } from './admin/admin.module';
import { MensajesClientesComponent } from './admin/mensajes-clientes/mensajes-clientes.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';










@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AgregarProductoComponent,
    UsuariosComponent,
    EmpresasComponent,
    ProductosComponent,
    NavvComponent,
    MensajesClientesComponent,
    DashboardComponent,
  
   
   

 
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    AdminModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
