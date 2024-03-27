import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserList } from '../models/user_list';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  private apiUrl = 'https://backendlyon.onrender.com/user/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserList[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.users.map((user: any) => ({
        _id: user._id,
        name: user.name,
        email: user.email,
        rol_id: user.rol_id,
        token: user.token
      })))
    );
  }
}
