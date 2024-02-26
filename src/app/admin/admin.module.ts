import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,

  ],
  exports: [



  ],

  imports:[BrowserModule, RouterModule]
})
export class AdminModule { }
