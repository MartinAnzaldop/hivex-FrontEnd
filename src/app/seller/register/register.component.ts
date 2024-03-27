
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { company } from 'src/app/models/company';

import { CompanyService } from 'src/app/services/company.service';
import { Toast, ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {
  CompanyForm: FormGroup;
  user_id: string = '';
  companyExist: string = '';

  constructor(private fb: FormBuilder, private router: Router, private _CompanyService: CompanyService
    , private Toast: ToastrService) {
    this.CompanyForm=this.fb.group({
      companyName:['', Validators.required],
      companyCountry:['', Validators.required],
      productType:['', Validators.required],
      companyPhone:['', Validators.required],
      companyContact:['', Validators.required],
      companyRfc:['', Validators.required]
  })
  }


  ngOnInit() {

  }

  addCompany(){
    const Company:company = {
      companyName: this.CompanyForm.get('companyName')?.value,
      companyCountry: this.CompanyForm.get('companyCountry')?.value,
      productType: this.CompanyForm.get('productType')?.value,
      companyPhone: this.CompanyForm.get('companyPhone')?.value,
      companyContact: this.CompanyForm.get('companyContact')?.value,
      companyRfc: this.CompanyForm.get('companyRfc')?.value,
      user_id: this.user_id = localStorage.getItem('userId') || ''
    }
    this._CompanyService.addCompnay(Company).subscribe(dato=>{
      this.router.navigate(['/homeSeller'])
      this.Toast.success('Company added successfully', 'Success');
      console.log(dato);
      console.log(dato.company._id);
      localStorage.setItem('companyId', dato.company._id);
    }, error=>{
    console.log(error);
    })


  }

}
