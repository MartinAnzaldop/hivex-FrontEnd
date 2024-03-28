import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header-seller',
  templateUrl: './header-seller.component.html',
  styleUrls: ['./header-seller.component.css']
})
export class HeaderSellerComponent implements OnInit {

  constructor(private toastr: ToastrService,
    private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }


  logOut(){

    localStorage.clear();
    this.router.navigate(['/inicio'])
    this.toastr.error('You have successfully logged out','Goodbye!');
  }
}
