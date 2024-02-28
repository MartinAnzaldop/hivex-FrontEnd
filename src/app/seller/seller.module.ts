import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomeSellerComponent

  ],
  exports: [
    HomeSellerComponent
  ],

  imports: [BrowserModule, RouterModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule]
})
export class SellerModule { }
