import { CommonModule } from '@angular/common';
import { Component,   HostListener,   OnDestroy,   OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router, RouterModule } from '@angular/router';
import { CardComponent } from '../card/card.component';

import { AuthorizationService } from '../Services/authorization.service';
import { GameService } from '../Services/blackjack.service';
import { SessionService } from '../Services/session.service';
import { Session } from '../Interfaces/Session';
import { User } from '../Interfaces/User';

@Component({
  selector: 'app-blakcjack',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent,RouterModule],
  templateUrl: './blakcjack.component.html',
  styleUrl: './blakcjack.component.scss'
})
export class GameComponent implements OnInit, OnDestroy {
  deck: any[] = [];
  dealer: any = null;
  player: any = null;
  name: string = '';
  wallet: number = 0;
  inputValue: string = '';
  currentBet: number | null = null;
  gameOver: boolean = false;
  message: string | null = null;
  session: Session | null = null;
  user: any;
  gameId: any;
  userId: any;

  constructor(private router: Router, private authservice :AuthorizationService,
              private blackjacService : GameService, private sessionService: SessionService
   ) {}
  ngOnDestroy(): void {
    this.endSession();
  }

  async ngOnInit() {
    this.userId = sessionStorage.getItem('userId');
    if (!this.userId) {
      this.router.navigate(['/login']);
    }
    this.authservice.authentificate(Number(this.userId));
    this.gameId = await this.blackjacService.getGameId("Blackjack");
    this.startNewGame();
    this.startSession();
    document.body.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  startSession(): void {
    this.session = {
      id: 0,
      userId: this.userId,
      startTime: new Date(),
      endTime: new Date(),
      gameId: this.gameId,
      totalSpent: 0,
      totalWon: 0
    };
  }

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler(event: Event): void {
    this.endSession();
  }
  endSession(): void {
    this.session!.endTime = new Date();

    this.sessionService.sendSession(this.session!).subscribe(
    );
    console.log(this.session)
  }
  generateDeck() {
    const cards = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];
    const suits = ['♦', '♣', '♥', '♠'];
    const deck = [];

    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < suits.length; j++) {
        deck.push({ number: cards[i], suit: suits[j] });
      }
    }

    return deck;
  }

  dealCards(deck: any[]) {
    const playerCard1 = this.getRandomCard(deck);
    const dealerCard1 = this.getRandomCard(playerCard1.updatedDeck);
    const playerCard2 = this.getRandomCard(dealerCard1.updatedDeck);

    const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
    const dealerStartingHand = [dealerCard1.randomCard, {}];

    const player = {
      cards: playerStartingHand,
      count: this.getCount(playerStartingHand)
    };

    const dealer = {
      cards: dealerStartingHand,
      count: this.getCount(dealerStartingHand)
    };

    return { updatedDeck: playerCard2.updatedDeck, player, dealer };
  }

  startNewGame(type?: string) {
      this.authservice.authentificate(Number(this.userId));
      this.authservice.getCurrentUser().subscribe(
        cuurrentuser => {
          if (cuurrentuser) {
            this.player = {
              name: cuurrentuser.first_Name,
              wallet: cuurrentuser.balance
            };
            this.name = cuurrentuser.first_Name || '';
            this.wallet = cuurrentuser.balance || 0;
          } else {
            console.error('User not found or not logged in');
          }
        },
        error => {
          console.error('Error fetching user:', error);
        }
      );
    if (type === 'continue') {
      if (this.wallet > 0) {
        this.currentBet = null;
        this.gameOver = false;
        this.message = null;
      } else {
        this.message = 'Game over! You are broke! Please start a new game.';
      }
    } else {
      const deck = this.generateDeck();
      const { updatedDeck, player, dealer } = this.dealCards(deck);

      this.deck = updatedDeck;
      this.dealer = dealer;
      this.player = player;
      this.inputValue = '';
      this.currentBet = null;
      this.gameOver = false;
      this.message = null;
    }
  }

  getRandomCard(deck: any[]) {
    const updatedDeck = [...deck];
    const randomIndex = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[randomIndex];
    updatedDeck.splice(randomIndex, 1);

    return { randomCard, updatedDeck };
  }

  placeBet() {
    const currentBet = +this.inputValue;

    if (currentBet > this.wallet) {
      this.message = 'Недостаточно средств для такой ставки.';
    } else if (currentBet % 1 !== 0 || currentBet === 0) {
      this.message = 'Пожалуйста, делайте ставки целыми числами.';
    } else {
      const wallet = this.wallet - currentBet;
      this.blackjacService.placeBet(currentBet);
      if (this.session) {
        this.session.totalSpent += currentBet;
      }
      const deck = (this.deck.length < 10) ? this.generateDeck() : this.deck;
      const { updatedDeck, player, dealer } = this.dealCards(deck);

      this.deck = updatedDeck;
      this.player = player;
      this.dealer = dealer;
      this.wallet = wallet;
      this.currentBet = currentBet;
      this.gameOver = false;
      this.message = null;
    }
  }

  hit() {
    if (!this.gameOver) {
      if (this.currentBet) {
        const { randomCard, updatedDeck } = this.getRandomCard(this.deck);
        this.player.cards.push(randomCard);
        this.player.count = this.getCount(this.player.cards);

        if (this.player.count > 21) {
          this.message = 'BUST!';
          this.gameOver = true;
        } else {
          this.deck = updatedDeck;
        }
      } else {
        this.message = 'Please place bet.';
      }
    } else {
      this.message = 'Game over! Please start a new game.';
    }
  }

   async stand() {
    if (!this.gameOver) {
      if (this.currentBet) {
        let deck = this.deck;
        let dealer = this.dealer;
        dealer.cards.pop();

        while (dealer.count < 17) {
          const { dealer: updatedDealer, updatedDeck } = this.dealerDraw(dealer, deck);
          dealer = updatedDealer;
          deck = updatedDeck;
        }

        if (dealer.count > 21) {
          this.wallet += this.currentBet * 2;
          this.message = 'Dealer bust! You win!';
        } else {
          const winner = this.getWinner(dealer, this.player);

          if (winner === 'dealer') {
            this.message = 'Dealer wins...';
          } else if (winner === 'player') {
            this.wallet += this.currentBet * 2;
            await this.blackjacService.winBet(this.currentBet * 2);
            if (this.session) {
              this.session.totalWon += this.currentBet * 2;
            }
            this.message = 'You win!';
          } else {
            this.wallet += this.currentBet;
            await this.blackjacService.winBet(this.currentBet);
            if (this.session) {
              this.session.totalWon += this.currentBet ;
            }
            this.message = 'Push.';
          }
        }

        this.gameOver = true;
        this.deck = deck;
        this.dealer = dealer;
      } else {
        this.message = 'Please place bet.';
      }
    } else {
      this.message = 'Game over! Please start a new game.';
    }
  }

  dealerDraw(dealer: any, deck: any[]) {
    const { randomCard, updatedDeck } = this.getRandomCard(deck);
    dealer.cards.push(randomCard);
    dealer.count = this.getCount(dealer.cards);
    return { dealer, updatedDeck };
  }

  getCount(cards: any[]) {
    const rearranged = cards.filter(card => card.number !== 'A').concat(cards.filter(card => card.number === 'A'));

    return rearranged.reduce((total, card) => {
      if (!card.number) {
        return total; 
      } else if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
        return total + 10;
      } else if (card.number === 'A') {
        return (total + 11 <= 21) ? total + 11 : total + 1;
      } else {
        return total + card.number;
      }
    }, 0);
  }

  getWinner(dealer: any, player: any): string {
    if (dealer.count > player.count) {
      return 'dealer';
    } else if (dealer.count < player.count) {
      return 'player';
    } else {
      return 'push';
    }
  }
  

  inputChange(e: any) {
    this.inputValue = e.target.value;
  }

  handleKeyDown(e: KeyboardEvent) {
    const enter = 13;

    if (e.keyCode === enter) {
      this.placeBet();
    }
  }
}
