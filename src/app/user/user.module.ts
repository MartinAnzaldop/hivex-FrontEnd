import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';
import { TopbarComponent } from './topbar/topbar.component';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopComponent } from './shop/shop.component';
import { CarComponent } from './car/car.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    InicioComponent,
    TopbarComponent,
    ContactComponent,
    DetailComponent,
    CheckoutComponent,
    ShopComponent,
    CarComponent,

  ],
  exports: [


  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule

  ]
})
export class UserModule { }
