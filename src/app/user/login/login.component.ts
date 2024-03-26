import { LoginUser } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import config from '../../../../capacitor.config';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailEnviado: string = '';
  LoginForm: FormGroup;
  id: string = '';
  name: string = '';
  loading = false;




  constructor(private toastr: ToastrService,
    private fb: FormBuilder, private router: Router, private _Login: LoginService) {
    this.LoginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    })
  }
  ngOnInit(): void {

  }

  login(LoginUser: LoginUser) {
    this.loading = true;
    this._Login.login(LoginUser).subscribe(
      response => {
        // Manejar la respuesta de la API en caso de éxito
        console.log(response);
        localStorage.setItem('userId', response.createUser.id);
          localStorage.setItem('userName', response.createUser.name);

        if (response && response.createUser && response.createUser.id) {

          this.router.navigate(['/home']);
          this.toastr.success('Welcome to "Hivex"', 'Login successfull');
          this.loading = false;
        } else {
this.loading = false;
          this.toastr.error('Email o contraseña incorrectos', 'Error en el inicio de sesión');
        }
      },
      error => {
this.loading = false;
        this.toastr.error('User incorrect', 'Error');
      }
    );
  }
}
