import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
export class CompanyRegistrationComponent implements OnInit {
  companyName: string = '';
  country: string = '';
  productType: string = '';
  phone: string = '';
  contactName: string = '';
  contactRFC: string = '';
  countryCode: string = '+';
  onCountryCodeChange(event: any) {
    // Bloquear entrada de no números
    this.countryCode = event.target.value.replace(/[^0-9]/g, '');
  }

  onPhoneChange(event: any) {
    // Bloquear entrada de no números
    this.phone = event.target.value.replace(/[^0-9]/g, '');
  }
  ngOnInit() {

  }

  onSubmit() {
    console.log('Formulario enviado:', {
      companyName: this.companyName,
      country: this.country,
      productType: this.productType,
      phone: this.phone,
      contactName: this.contactName,
      contactRFC: this.contactRFC,
      countryCode: this.countryCode,
    });
  }
}
