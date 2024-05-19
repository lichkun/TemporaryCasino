import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';

export interface Bet {
  name: string;
  amount: number;
  type: string;
}

@Injectable({
  providedIn: 'root'
})
export class RouletteService {
  private bankValue = 1000;
  private currentBet = 0;
  private wager = 5;
  private lastWager = 0;
  private bets: Bet[] = [];
  private wheelNumbers: number[] = [];
  private spinningWheelNumber = '';
  private gameOutcome = '';
  private betSubject = new BehaviorSubject<Bet[]>([]);
  private spinningWheelNumberSubject = new BehaviorSubject<string>('');
  private gameOutcomeSubject = new BehaviorSubject<string>('');

  constructor() { }

  initGame(): void {
    this.bankValue = 1000;
    this.currentBet = 0;
    this.wager = 5;
    this.lastWager = 0;
    this.bets = [];
    this.wheelNumbers = [];
    this.spinningWheelNumber = '';
    this.gameOutcome = '';
    this.betSubject.next(this.bets);
    this.spinningWheelNumberSubject.next(this.spinningWheelNumber);
    this.gameOutcomeSubject.next(this.gameOutcome);
  }

  getBets(): Observable<Bet[]> {
    return this.betSubject.asObservable();
  }

  getSpinningWheelNumber(): Observable<string> {
    return this.spinningWheelNumberSubject.asObservable();
  }

  getGameOutcome(): Observable<string> {
    return this.gameOutcomeSubject.asObservable();
  }

  setBet(bet: Bet): void {
    if (this.currentBet + bet.amount > this.bankValue) {
      return;
    }
    this.bets.push(bet);
    this.currentBet += bet.amount;
    this.betSubject.next(this.bets);
  }

  removeBet(bet: Bet): void {
    const index = this.bets.indexOf(bet);
    if (index > -1) {
      this.bets.splice(index, 1);
      this.currentBet -= bet.amount;
      this.betSubject.next(this.bets);
    }
  }

  clearBets(): void {
    this.bets = [];
    this.currentBet = 0;
    this.betSubject.next(this.bets);
  }

  getTotalBet(): number {
    return this.bets.reduce((total, bet) => total + bet.amount, 0);
  }

  getOutsideBets(): Bet[] {
    return [
      { name: '1 to 18', amount: 0, type: 'outside_low' },
      { name: '19 to 36', amount: 0, type: 'outside_high' },
      { name: '1 to 12', amount: 0, type: 'outside_dozen' },
      { name: '13 to 24', amount: 0, type: 'outside_dozen' },
      { name: '25 to 36', amount: 0, type: 'outside_dozen' },
      { name: 'RED', amount: 0, type: 'outside_oerb' },
      { name: 'BLACK', amount: 0, type: 'outside_oerb' },
      { name: 'ODD', amount: 0, type: 'outside_oerb' },
      { name: 'EVEN', amount: 0, type: 'outside_oerb' }
    ];
  }

  getDozenBets(): Bet[] {
    return [
      { name: '1 to 12', amount: 0, type: 'outside_dozen' },
      { name: '13 to 24', amount: 0, type: 'outside_dozen' },
      { name: '25 to 36', amount: 0, type: 'outside_dozen' }
    ];
  }

  getOerbBets(): Bet[] {
    return [
      { name: 'RED', amount: 0, type: 'outside_oerb' },
      { name: 'BLACK', amount: 0, type: 'outside_oerb' },
      { name: 'ODD', amount: 0, type: 'outside_oerb' },
      { name: 'EVEN', amount: 0, type: 'outside_oerb' }
    ];
  }

  spin(): void {
    this.spinningWheelNumber = this.getSpinResult();
    this.gameOutcome = this.getGameOutcomeText();
    this.spinningWheelNumberSubject.next(this.spinningWheelNumber);
    this.gameOutcomeSubject.next(this.gameOutcome);
  }

  private getSpinResult(): string {
    const randomNumber = Math.floor(Math.random() * 37);
    this.spinningWheelNumber = randomNumber.toString();
    return randomNumber.toString();
  }

  private getGameOutcomeText(): string {
    const spinResult = parseInt(this.spinningWheelNumber, 10);
    const bets = this.bets.filter(bet => bet.type === 'number');
    const winningBets = bets.filter(bet => spinResult === parseInt(bet.name, 10));
    if (winningBets.length > 0) {
      const totalWinningAmount = winningBets.reduce((total, bet) => total + bet.amount, 0);
      this.bankValue += totalWinningAmount;
      this.currentBet -= totalWinningAmount;
      this.bets = this.bets.filter(bet => bet.type !== 'number' || bet.name !== spinResult.toString());
      return `You won ${totalWinningAmount}!`;
    } else {
      return 'You lost!';
    }
  }
}