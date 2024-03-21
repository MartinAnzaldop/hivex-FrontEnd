import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  LoginUser } from '../models/login';
import { Response } from '../models/response';
import { user } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl = 'https://backendlyon.onrender.com/user/login';

  constructor(private http: HttpClient) { }

//   login(loginUser:LoginUser):Observable<any>{
//     return this.http.post<any>(this.apiUrl, loginUser);
//   }
// }


login(loginUser:LoginUser):Observable<any>{
  console.log(loginUser);
  const user = {
    email: loginUser.email,
    password: loginUser.password
  }
  return this.http.post<any>(this.apiUrl, user);
}
}
