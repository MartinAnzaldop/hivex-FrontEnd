import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSellerComponent } from './home-seller/home-seller.component';



const routes: Routes = [
    {path: 'homeSeller',component:HomeSellerComponent},


];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule{

}
