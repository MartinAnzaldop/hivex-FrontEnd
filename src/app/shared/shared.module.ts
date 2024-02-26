import { NgModule } from '@angular/core';

import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { PruebaComponent } from './prueba/prueba.component';

@NgModule({
  declarations: [
    HeaderAdminComponent,
    HeaderUserComponent,
    PruebaComponent,

  ],
  exports: [
    PruebaComponent,
    HeaderAdminComponent,
    HeaderUserComponent,
    BrowserModule,


  ],

  imports:[BrowserModule, RouterModule]
})
export class SharedModule { }
