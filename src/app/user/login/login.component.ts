import { LoginUser } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

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
              private fb: FormBuilder,
              private router: Router,
              private _Login: LoginService,
              private afAuth: AngularFireAuth) {
    this.LoginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  login() { // No se espera ningún argumento aquí
    this.loading = true;
    const loginUser: LoginUser = {
      email: this.LoginForm.get('email')?.value,
      password: this.LoginForm.get('password')?.value
    };

    this._Login.login(loginUser).subscribe(
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

  async signInWithGoogle() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(result);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error de autenticación con Google:', error);
    }
  }
}
