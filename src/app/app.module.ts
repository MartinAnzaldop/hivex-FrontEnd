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
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { AllproductsComponent } from './admin/allproducts/allproducts.component';











@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AgregarProductoComponent,
    EmpresasComponent,
    ProductosComponent,
    NavvComponent,
    MensajesClientesComponent,
    DashboardComponent,
    UsuariosComponent,
    AllproductsComponent,
  
  
   
   

 
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
