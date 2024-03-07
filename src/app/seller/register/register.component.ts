
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor() { }




  companyName: string = '';
  country: string = '';
  productType: string = '';
  phone: string = '';
  contactName: string = '';
  contactRFC: string = '';
  countryCode: string = '';
  onCountryCodeChange(event: any) {

    this.countryCode = event.target.value.replace(/[^0-9]/g, '');
  }

  onPhoneChange(event: any) {

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
