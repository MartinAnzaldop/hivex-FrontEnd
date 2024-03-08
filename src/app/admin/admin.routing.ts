import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProductosComponent } from './productos/productos.component';
import { NavvComponent } from './navv/navv.component';
import { UsuariosComponent } from './usuarios/usuarios.component';





const routes: Routes = [
    {path: 'loginAdmin',component:LoginComponent},
    {path: 'dashboardAdmin',component:DashboardComponent},
    { path: 'empresas', component: EmpresasComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'navv', component: NavvComponent},
    { path: 'usuarios', component: UsuariosComponent},

  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
