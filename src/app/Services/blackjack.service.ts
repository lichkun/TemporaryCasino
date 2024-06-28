import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl = 'https://localhost:7105'; 
  
  async getGameId(title: string){
    try {
      const response = await fetch(`${this.apiUrl}/api/Game/find/${title}`, {
        method: 'GET'
      });
      const data = await response.json();
      return data.id;
    } catch (error) {
      console.error('Error:', error);
    } 
  }

  async placeBet (bet: number){
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
  
  async winBet (bet: number) {
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
