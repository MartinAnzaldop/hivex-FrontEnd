import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user.routing';
import { AdminModule } from './admin/admin.module';
import { AdminRoutingModule } from './admin/admin.routing';
import { SellerRoutingModule } from './seller/seller.routing';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    UserRoutingModule, AdminRoutingModule, SellerRoutingModule]
})
export class AppRoutingModule { }
