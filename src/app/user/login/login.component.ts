import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private afAuth: AngularFireAuth, private router: Router) {} 

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
