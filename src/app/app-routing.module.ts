import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserRoutingModule } from './user/user.routing';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    UserRoutingModule]
})
export class AppRoutingModule { }
