import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { user } from '../models/user';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { GoogleAuthProvider } from 'firebase/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://backendlyon.onrender.com/user/register';

  constructor(private http: HttpClient, private afAuth: AngularFireAuth) {} 

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  addUser(user:user):Observable<any>{

    return this.http.post(this.apiUrl, user);
  }

  sendSignInLinkToEmail(email: string): Promise<void> {
    const actionCodeSettings = {
      url: 'http://localhost:4200/inicio',
      handleCodeInApp: true,

    };
    const auth = getAuth();
    return sendSignInLinkToEmail(auth, email, actionCodeSettings);
  }

  googleAuth(): void {
    this.authLogin(new GoogleAuthProvider()).then((res: any) => {
      window.location.href = '/inicio'; 
    }).catch((error: any) => {
      console.error('Error de autenticación con Google:', error);
    });
  }
  

  private authLogin(provider: any): Promise<any> {
    return this.afAuth.signInWithPopup(provider);
  }

  registerUserWithGoogle(userData: any): void {
    this.googleAuth();
  }
}
export class GoogleService {
  constructor(private afAuth: AngularFireAuth) {}

  async googleAuth(): Promise<void> {
    try {
      const result = await this.afAuth.signInWithPopup(new GoogleAuthProvider());
      console.log(result);
    } catch (error) {
      console.error('Error de autenticación con Google:', error);
    }
  }
}