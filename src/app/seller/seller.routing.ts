import { StatisticsComponent } from './statistics/statistics.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ChatsComponent } from './chats/chats.component';
import { OrdersComponent } from './orders/orders.component';



const routes: Routes = [
    {path: 'homeSeller',component:HomeSellerComponent},
    {path: 'dashboardSeller',component:DashboardSellerComponent},
    {path: 'listProducts',component:ListProductsComponent},
    {path: 'formProduct',component:FormProductComponent},
    {path: 'chats',component:ChatsComponent},
    {path: 'orders',component:OrdersComponent},
    {path: 'statistics',component:StatisticsComponent},



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule{

}
