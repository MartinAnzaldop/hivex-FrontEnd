import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr'; // Importa ToastrService

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;
  loading = false;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private afAuth: AngularFireAuth,
              private toastr: ToastrService) { // Inyecta ToastrService
    this.UserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmation: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {}

  addUser() {
    this.loading = true;
    const User: user = {
      name: this.UserForm?.get('name')?.value,
      email: this.UserForm?.get('email')?.value,
      password: this.UserForm?.get('password')?.value,
      confirmation: this.UserForm?.get('confirmation')?.value
    };

    if (this.UserForm.get('password')?.value !== this.UserForm.get('confirmation')?.value) {
      this.toastr.error('Las contraseñas ingresadas deben ser las mismas', 'Error'); // Utiliza ToastrService para mostrar un mensaje de error
      this.loading = false;
      return;
    }

    this.userService.addUser(User).subscribe(
      dato => {
        this.loading = false;
        this.router.navigate(['/login']);
        this.toastr.info('check your email', 'check your email'); // Utiliza ToastrService para mostrar un mensaje de información
        console.log(User);
      },
      error => {
        this.loading = false;
        this.toastr.error('Error', 'Error'); // Utiliza ToastrService para mostrar un mensaje de error
        console.log(error);
      }
    );
  }

  async signInWithGoogle() {
    try {
      const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(result);
      // Redirige al usuario a la página de inicio después de iniciar sesión exitosamente
      this.router.navigate(['/home']); // Utiliza navigate para redirigir
    } catch (error) {
      console.error('Error de autenticación con Google:', error);
      // Aquí puedes manejar el error de autenticación según tus necesidades
    }
  }
}
