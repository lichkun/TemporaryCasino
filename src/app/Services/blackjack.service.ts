import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://localhost:7105'; 

  placeBet = async (bet: number) => {
    try {
      const response = await fetch(`${this.apiUrl}/api/User/bet/${bet}`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Error placing bet');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  winBet = async (bet: number) => {
    try {
      const response = await fetch(`${this.apiUrl}/api/User/win/${bet}`, {
        method: 'GET'
      });
      if (!response.ok) {
        throw new Error('Error winning bet');
      }
      return await response.json();
    } catch (error) {
      console.error('Error:', error);
    }
  };
}
