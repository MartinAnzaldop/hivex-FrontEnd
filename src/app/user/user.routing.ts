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


const routes: Routes = [
    {path: 'inicio',component:InicioComponent},
    {path: 'checkout',component:CheckoutComponent},
    {path: 'detail',component:DetailComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'car',component:CarComponent},
    {path: 'categories',component:ShopComponent},
    {path: 'Catalogue',component:CatalogoComponent},
    {path: 'university',component:UniversityComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule{

}
