import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ChatsComponent } from './chats/chats.component';
import { OrdersComponent } from './orders/orders.component';
import { FormProductComponent } from './form-product/form-product.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    HomeSellerComponent,
    DashboardSellerComponent,
    ListProductsComponent,
    ChatsComponent,
    OrdersComponent,
    FormProductComponent,
    StatisticsComponent

  ],
  exports: [
    HomeSellerComponent, DashboardSellerComponent
  ],

  imports: [BrowserModule, RouterModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    SharedModule]
})
export class SellerModule { }
