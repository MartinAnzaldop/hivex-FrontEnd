import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth, private router: Router) {} // Inyecta Router

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
