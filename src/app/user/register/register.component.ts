import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { user } from 'src/app/models/user';
import firebase from 'firebase/compat/app'; // Importa firebase
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth

@Component({
  selector: 'user-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  UserForm: FormGroup;

  constructor(private userService: UserService,
              private fb: FormBuilder,
              private router: Router,
              private afAuth: AngularFireAuth) { // Inyecta AngularFireAuth
    this.UserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {}

  addUser() {
    const User: user = {
      name: this.UserForm?.get('name')?.value,
      email: this.UserForm?.get('email')?.value,
      password: this.UserForm?.get('password')?.value,
    };

    this.userService.addUser(User).subscribe(
      dato => {
        this.router.navigate(['/home']);
        console.log(User);
      },
      error => {
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
