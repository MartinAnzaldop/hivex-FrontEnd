import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailComponent } from './detail/detail.component';
import { ContactComponent } from './contact/contact.component';
import { CarComponent } from './car/car.component';
import { ShopComponent } from './shop/shop.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { UniversityComponent } from './university/university.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeSellerComponent } from '../seller/home-seller/home-seller.component';
import { HomeUserComponent } from './home-user/home-user.component';


const routes: Routes = [
    {path: 'inicio',component:InicioComponent},
    {path: 'checkout',component:CheckoutComponent},
    {path: 'detail',component:DetailComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'car',component:CarComponent},
    {path: 'categories',component:ShopComponent},
    {path: 'Catalogue',component:CatalogoComponent},
    {path: 'university',component:UniversityComponent},
    {path: 'login',component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: 'home',component:HomeUserComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{

}
