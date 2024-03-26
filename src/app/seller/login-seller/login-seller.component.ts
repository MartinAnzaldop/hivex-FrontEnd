import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.css']
})
export class LoginSellerComponent implements OnInit {

  emailEnviado: string = '';
  LoginForm: FormGroup;

  loading = false;




  constructor(private toastr: ToastrService,
    private fb: FormBuilder, private router: Router) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  ngOnInit(): void {

  }

  login() {
    this.loading = true;
    this.toastr.success('Login efetuado com sucesso!');
    this.router.navigate(['/dashboardSeller']);
    this.loading = false;
  }
}

