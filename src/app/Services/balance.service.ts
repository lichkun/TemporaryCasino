import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AuthorizationService } from './authorization.service';
import { Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  private apiUrl = 'https://localhost:7105'; 

  constructor(private http: HttpClient, private authService: AuthorizationService) { }



  depositSumm(summ: number): Observable<any> {
    return this.authService.getCurrentUser().pipe(
      switchMap(user => {
        if (user) {

          user.balance = Number(user.balance) + Number(summ);
          return this.http.put<any>(`${this.apiUrl}/api/User`, user);
        } else {
          return of(null);
        }
      })
    );
  }

}
