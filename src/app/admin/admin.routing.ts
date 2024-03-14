import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { ProductosComponent } from './productos/productos.component';
import { NavvComponent } from './navv/navv.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { SidenavComponent } from './sidenav/sidenav.component';





const routes: Routes = [
    {path: 'loginAdmin',component:LoginComponent},
    
    { path: 'empresas', component: EmpresasComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'navv', component: NavvComponent},
    { path: 'usuarios', component: UsuariosComponent},
    { path: 'sidenav', component: SidenavComponent},


  

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule{

}
