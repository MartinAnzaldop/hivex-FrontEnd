import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MensajesClientesComponent } from './mensajes-clientes/mensajes-clientes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { NavvComponent } from './navv/navv.component';




@NgModule({
  declarations: [
    LoginComponent,
   
 


  ],
  exports: [

   

  ],

  imports:[BrowserModule, RouterModule, SharedModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatPaginatorModule,
    MatTableModule,
  
  
  ]
})
export class AdminModule { }
