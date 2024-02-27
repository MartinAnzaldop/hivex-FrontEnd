import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,

  ],
  exports: [



  ],

  imports:[BrowserModule, RouterModule, SharedModule]
})
export class AdminModule { }
