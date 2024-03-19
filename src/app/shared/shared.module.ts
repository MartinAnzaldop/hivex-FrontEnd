import { NgModule } from '@angular/core';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderSellerComponent } from './header-seller/header-seller.component';
import { UserModule } from '../user/user.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    HeaderUserComponent,

    FooterComponent,
    NavbarComponent,
    HeaderSellerComponent

  ],
  exports: [

    HeaderAdminComponent,
    HeaderUserComponent,
    BrowserModule,
    FooterComponent,
    NavbarComponent,
    HeaderSellerComponent,



  ],

  imports:[BrowserModule, RouterModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
