import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiUrl = 'https://backendlyon.onrender.com/companies';

  constructor(private http: HttpClient) { }

//   login(loginUser:LoginUser):Observable<any>{
//     return this.http.post<any>(this.apiUrl, loginUser);
//   }
// }


addCompnay(Company:company):Observable<any>{
  return this.http.post<any>(this.apiUrl, Company);
}
}
