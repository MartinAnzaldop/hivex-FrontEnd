import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth'; // Importa AngularFireAuth
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth'; // Importa GoogleAuthProvider
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://backendlyon.onrender.com/user/register';

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {} // Agrega afAuth aquí

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  addUser(user: user): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  sendSignInLinkToEmail(email: string): Promise<void> {
    const actionCodeSettings = {
      url: 'http://localhost:4200/inicio',
      handleCodeInApp: true,
      // Aquí puedes configurar otras opciones según tus necesidades
    };
    const auth = getAuth();
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  googleAuth(): void {
    this.authLogin(new GoogleAuthProvider()).then((res: any) => {
      // Redirige al usuario a la página deseada después de la autenticación
      window.location.href = '/inicio'; // Cambia '/home' por '/inicio' si es la ruta correcta
    }).catch((error: any) => {
      console.error('Error de autenticación con Google:', error);
    });
  }
  

  private authLogin(provider: any): Promise<any> {
    return this.afAuth.signInWithPopup(provider);
  }

  registerUserWithGoogle(userData: any): void {
    // Aquí puedes añadir lógica para registrar al usuario utilizando la autenticación de Google
    // Por ejemplo, puedes obtener los datos del usuario autenticado y luego llamar al método registerUser
    this.googleAuth(); // Llama al método googleAuth para iniciar sesión con Google
  }
}
export class GoogleService {
  constructor(private afAuth: AngularFireAuth) {}

  async googleAuth(): Promise<void> {
    try {
      const result = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      console.log(result);
      // Aquí puedes redirigir al usuario a la página de inicio después de iniciar sesión exitosamente
    } catch (error) {
      console.error('Error de autenticación con Google:', error);
      // Aquí puedes manejar el error de autenticación según tus necesidades
    }
  }
}