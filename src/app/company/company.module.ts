// src/app/company/company.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';

@NgModule({
  declarations: [CompanyRegistrationComponent],
  imports: [CommonModule, FormsModule],
  exports: [CompanyRegistrationComponent],
})
export class CompanyModule { }
