import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-entry',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './entry.component.html',
  styleUrl: '../blakcjack.component.scss'
})
export class EntryComponent {
  name: string = '';
  wallet: string = '';  

  constructor(private router: Router) {}



  ngOnInit() {

    const userId = sessionStorage.getItem('userId');
      if (!userId) {
        this.router.navigate(['/login']);
      }
  }

  startGame(event: Event) {
    event.preventDefault();
    const money = this.wallet.slice(1);
    if (this.name && money) {
      this.router.navigate(['blackjack/game'], { state: { name: this.name, wallet: parseInt(money, 10) } });
    }
  }
  
  handleKeyPress(event: KeyboardEvent) {
    const allowedChars = /[0-9]/;
    const inputChar = event.key;
    
    if (!allowedChars.test(inputChar)) {
      event.preventDefault();
    }
  }

  handleWalletChange(event: Event) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const numericValue = value.replace(/[^0-9]/g, '');
    this.wallet = `$${numericValue}`;
  }
}
