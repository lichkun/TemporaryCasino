import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { User } from '../Interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private apiUrl = 'https://localhost:7105'; 

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/api/User`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/User`, user);
  }

  authorizeUser(email: string, password: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/User/authorization/${email}/${password}`);
  }

  isLoggedIn(): boolean {
    return sessionStorage.getItem('userId') !== null;
  }

  logout(): void {
    sessionStorage.removeItem('userId');
  }

  getCurrentUser(): Observable<any> {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      return this.http.get<any>(`${this.apiUrl}/api/User/${userId}`);
    }
    return of(null);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/api/User`, user);
  }

  updateUserEmail(email: string): Observable<any> {
    return this.getCurrentUser().pipe(
      switchMap(user => {
        if (user) {
          user.email = email;
          return this.http.put<any>(`${this.apiUrl}/api/User`, user);
        }
        return of(null);
      })
    );
  }

  updateUserPhone(phone: string): Observable<any> {
    return this.getCurrentUser().pipe(
      switchMap(user => {
        if (user) {
          user.phone = phone;

          console.log("new user - " + user);
          return this.http.put<any>(`${this.apiUrl}/api/User`, user);
        } else {
          return of(null);
        }
      })
    );
  }

  updateUserPassword(password: string): Observable<any> {
    return this.getCurrentUser().pipe(
      switchMap(user => {
        if (user) {
          user.password = password;
          return this.http.put<any>(`${this.apiUrl}/api/User`, user);
        }
        return of(null);
      })
    );

  }

  
  

}
