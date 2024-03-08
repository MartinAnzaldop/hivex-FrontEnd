import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user.routing';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin.routing';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProductListComponent } from './admin/product-list/product-list.component';
import { AgregarProductoComponent } from './admin/agregar-producto/agregar-producto.component';
import { UsuariosComponent } from './admin/usuarios/usuarios.component';
import { ProductosComponent } from './admin/productos/productos.component';
import { MensajesClientesComponent } from './admin/mensajes-clientes/mensajes-clientes.component';
import { AllproductsComponent } from './admin/allproducts/allproducts.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'product-list', component: ProductListComponent},
  { path: 'agregar-producto', component: AgregarProductoComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'mensajes-clientes', component: MensajesClientesComponent},
  { path: 'allproducts', component: AllproductsComponent},
  
  
  
  


 
  // Otras rutas que puedas tener
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    UserRoutingModule, AdminRoutingModule]
})
export class AppRoutingModule { }
