import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Session } from '../Interfaces/Session'; 

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private apiUrl = `https://localhost:7105`; 

  constructor(private http: HttpClient) {}

  sendSession(session: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/api/Session`, session);
  }
}
