import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
emailRecu: string='';
  constructor() { }

  ngOnInit(): void {
this.info();
  }

info(){
  this.emailRecu=JSON.parse(localStorage.getItem('email')||'{}');
  console.log('email recuperado',this.emailRecu);
}

}
