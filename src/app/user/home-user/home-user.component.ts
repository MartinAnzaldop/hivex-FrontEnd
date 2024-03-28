import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
    this.info();
  }

  info() {
    this.name = localStorage.getItem('userName') || ''; // Provide a default value of an empty string
    console.log(this.name);
  }
}
