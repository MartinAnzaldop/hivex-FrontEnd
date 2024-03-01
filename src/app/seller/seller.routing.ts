import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';
import { DashboardSellerComponent } from './dashboard-seller/dashboard-seller.component';



const routes: Routes = [
    {path: 'homeSeller',component:HomeSellerComponent},
    {path: 'dashboardSeller',component:DashboardSellerComponent},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule{

}
