import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-seller',
  templateUrl: './home-seller.component.html',
  styleUrls: ['./home-seller.component.css']
})
export class HomeSellerComponent implements OnInit {
  dateCompany: string = '';

  constructor() { }

  ngOnInit(): void {
    this.dateCompany = localStorage.getItem('companyId') ?? '';
    console.log(this.dateCompany);
  }
}
