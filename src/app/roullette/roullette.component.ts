import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-roullette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roullette.component.html',
  styleUrl: './roullette.component.scss'
 })
 export class RoulletteComponent  {
    bankValue = 1000;
    currentBet = 0;
    wager = 5;
    ballTrack!: HTMLElement;
    lastWager = 0;
    bet: Array<{
    chipColour: any;
    element: any;amt: number, type: string, odds: number, numbers: string
    }> = [];
    numbersBet = [];
    previousNumbers = [];
  
    numRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    wheelnumbersAC = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];
  
    @ViewChild('container', {static: true}) containerRef!: ElementRef;
    
    constructor() { }
  
    ngOnInit(): void {
      this.startGame();
    }

    ngAfterViewInit() {
      this.ballTrack = document.querySelector('.ballTrack');
    }

    resetGame(){
      this.bankValue = 1000;
      this.currentBet = 0;
      this.wager = 5;
      this.bet = [];
      this.numbersBet = [];
      this.previousNumbers = [];
      // remove the betting board and notification elements
      // use Angular's built-in methods to manipulate the DOM
      // for example:
      // this.bettingBoard.nativeElement.remove();
      // this.notification.nativeElement.remove();
      this.buildBettingBoard();
    }
  
    startGame(){
      this.buildWheel();
      this.buildBettingBoard();
    }
  
    gameOver(){
      // create the notification element
      const notification = document.createElement('div');
      notification.setAttribute('id', 'notification');
      // create the notification content
      const nSpan = document.createElement('span');
      nSpan.setAttribute('class', 'nSpan');
      nSpan.innerText = 'Bankrupt';
      notification.append(nSpan);
      // create the play again button
      const nBtn = document.createElement('div');
      nBtn.setAttribute('class', 'nBtn');
      nBtn.innerText = 'Play again';
      nBtn.onclick = () => {
        this.resetGame();
      };
      notification.append(nBtn);
      // append the notification to the container
      this.containerRef.nativeElement.prepend(notification);
    }
  
    buildWheel(){
      // create the wheel element
      const wheel = document.createElement('div');
      wheel.setAttribute('class', 'wheel');
      // append the wheel to the container
      this.containerRef.nativeElement.append(wheel);

    }
  
    buildBettingBoard(){
      // create the betting board element
      const bettingBoard = document.createElement('div');
      bettingBoard.setAttribute('id', 'betting_board');
      // append the betting board to the container
      this.containerRef.nativeElement.append(bettingBoard);
      // build the rest of the betting board
      // replace the usage of document with Angular's built-in methods
      // for example:
      // const wl = bettingBoard.querySelector('.winning_lines');
      // instead use
      // const wl = this.bettingBoard.nativeElement.querySelector('.winning_lines');
    }
  
    clearBet(){
      this.bet = [];
      this.numbersBet = [];
    }
  
    setBet(e: any, n: string, t: string, o: number){
      this.lastWager = this.wager;
      this.wager = (this.bankValue < this.wager)? this.bankValue : this.wager;
      if(this.wager > 0){
        if(!this.containerRef.nativeElement.querySelector('.spinBtn')){
          const spinBtn = document.createElement('div');
          spinBtn.setAttribute('class', 'spinBtn');
          spinBtn.innerText = 'spin';
          spinBtn.onclick = () => {
            this.spin();
          };
          this.containerRef.nativeElement.append(spinBtn);
        }
        this.bankValue = this.bankValue - this.wager;
        this.currentBet = this.currentBet + this.wager;
        // update the bank and bet values in the template
        // for example:
        // this.bankValueSpan.nativeElement.innerText = this.bankValue;
        // this.betValueSpan.nativeElement.innerText = this.currentBet;
        for(let i = 0; i < this.bet.length; i++){
          if(this.bet[i].numbers.split(',').join(',') == n && this.bet[i].type == t){
            this.bet[i].amt = this.bet[i].amt + this.wager;
            let chipColour = (this.bet[i].amt < 5)? 'red' : ((this.bet[i].amt < 10)? 'blue' : ((this.bet[i].amt < 100)? 'orange' : 'gold'));
            e.querySelector('.chip').style.cssText = '';
            e.querySelector('.chip').setAttribute('class', 'chip ' + chipColour);
            let chipSpan = e.querySelector('.chipSpan');
            chipSpan.innerText = this.bet[i].amt;
            return;
          }
        }
        const obj = {
          element: e,
          amt: this.wager,
          type: t,
          odds: o,
          numbers: n
        };
        this.bet.push(obj);
    
        const numArray: number[] = n.split(',').map(Number);
        for(let i = 0; i < numArray.length; i++){
          if(!this.numbersBet.includes(numArray[i])){
            this.numbersBet.push(numArray[i]);
          }
        }
    
        if(!e.querySelector('.chip')){
          let chipColour = (this.wager < 5)? 'red' : ((this.wager < 10)? 'blue' : ((this.wager < 100)? 'orange' : 'gold'));
          const chip = document.createElement('div');
          chip.setAttribute('class', 'chip ' + chipColour);
          const chipSpan = document.createElement('span');
          chipSpan.setAttribute('class', 'chipSpan');
          chipSpan.innerText = this.wager.toString();
          chip.append(chipSpan);
          e.append(chip);
        }
      }
    }
  
    spin(){
      let winningSpin:number = Math.floor(Math.random() * 36);
      this.spinWheel(winningSpin);
      setTimeout(() => {
        if(this.numbersBet.includes(winningSpin)){
          let winValue = 0;
          let betTotal = 0;
          for(let i = 0; i < this.bet.length; i++){
            const numArray = this.bet[i].numbers.split(',').map(Number);
            if(numArray.includes(winningSpin)){
              this.bankValue = (this.bankValue + (this.bet[i].odds * this.bet[i].amt) + this.bet[i].amt);
              winValue = winValue + (this.bet[i].odds * this.bet[i].amt);
              betTotal = betTotal + this.bet[i].amt;
            }
          }
          this.win(winningSpin, winValue, betTotal);
        }
  
        this.currentBet = 0;
        // update the bank and bet values in the template
        // for example:
        // this.bankValueSpan.nativeElement.innerText = this.bankValue;
        // this.betValueSpan.nativeElement.innerText = this.currentBet;
  
        this.bet = [];
        this.numbersBet = [];
        this.removeChips();
        this.wager = this.lastWager;
        if(this.bankValue == 0 && this.currentBet == 0){
          this.gameOver();
        }
      }, 10000);
    }
  
    win(winningSpin: number, winValue: number, betTotal: number){
      if(winValue > 0){
        // create the notification element
        const notification = document.createElement('div');
        notification.setAttribute('id', 'notification');
        // create the notification content
        const nSpan = document.createElement('div');
        nSpan.setAttribute('class', 'nSpan');
        const nsnumber = document.createElement('span');
        nsnumber.setAttribute('class', 'nsnumber');
        nsnumber.style.cssText = (this.numRed.includes(winningSpin))? 'color:red' : 'color:black';
        nsnumber.innerText = winningSpin.toString();
        nSpan.append(nsnumber);
        const nsTxt = document.createElement('span');
        nsTxt.innerText = ' Win';
        nSpan.append(nsTxt);
        const nsWin = document.createElement('div');
        nsWin.setAttribute('class', 'nsWin');
          let nsWinBlock = document.createElement('div');
          nsWinBlock.setAttribute('class', 'nsWinBlock');
          nsWinBlock.innerText = 'Bet: ' + betTotal;
          nSpan.append(nsWinBlock);
          nsWin.append(nsWinBlock);
          nsWinBlock = document.createElement('div');
          nsWinBlock.setAttribute('class', 'nsWinBlock');
          nsWinBlock.innerText = 'Win: ' + winValue;
          nSpan.append(nsWinBlock);
          nsWin.append(nsWinBlock);
          nsWinBlock = document.createElement('div');
          nsWinBlock.setAttribute('class', 'nsWinBlock');
          nsWinBlock.innerText = 'Payout: ' + (winValue + betTotal);
          nSpan.append(nsWinBlock);
        nSpan.append(nsWin);
        notification.append(nSpan);
        // append the notification to the container
        const container = document.getElementById('container');
        this.containerRef.nativeElement.prepend(notification);
        setTimeout(() => {
          notification.style.cssText = 'opacity:0';
        }, 3000);
        setTimeout(() => {
          notification.remove();
        }, 4000);
      }
    }
  
    removeBet(e: any, n: string, t: string, o: number){
      this.wager = (this.wager == 0)? 100 : this.wager;
      for(let i = 0; i < this.bet.length; i++){
        if(this.bet[i].numbers == n && this.bet[i].type == t){
          if(this.bet[i].amt != 0){
            this.wager = (this.bet[i].amt > this.wager)? this.wager : this.bet[i].amt;
            this.bet[i].amt = this.bet[i].amt - this.wager;
            this.bankValue = this.bankValue + this.wager;
            this.currentBet = this.currentBet - this.wager;
            // update the bank and bet values in the template
            // for example:
            // this.bankValueSpan.nativeElement.innerText = this.bankValue;
            // this.betValueSpan.nativeElement.innerText = this.currentBet;
            if(this.bet[i].amt == 0){
              e.querySelector('.chip').style.cssText = 'display:none';
            }else{
              let chipColour = (this.bet[i].amt < 5)? 'red': ((this.bet[i].amt < 10)? 'blue' : ((this.bet[i].amt < 100)? 'orange' : 'gold'));
              e.querySelector('.chip').setAttribute('class', 'chip ' + chipColour);
              let chipSpan = e.querySelector('.chipSpan');
              chipSpan.innerText = this.bet[i].amt;
            }
          }
        }
      }
  
      if(this.currentBet == 0 && this.containerRef.nativeElement.querySelector('.spinBtn')){
        document.getElementsByClassName('spinBtn')[0].remove();
      }
    }
  
    spinWheel(winningSpin: number){
      for(let i = 0; i < this.wheelnumbersAC.length; i++){
        if(this.wheelnumbersAC[i] == winningSpin){
          var degree = (i * 9.73) + 362;
        }
      }
      // use Angular's built-in methods to manipulate the DOM
      // for example:
      // this.wheel.nativeElement.style.cssText = 'animation: wheelRotate 5s linear infinite;';
      // this.ballTrack.nativeElement.style.cssText = 'animation: ballRotate 1s linear infinite;';
  
      setTimeout(() => {
        // this.ballTrack.nativeElement.style.cssText = 'animation: ballRotate 2s linear infinite;';
        const style = document.createElement('style');
        style.type = 'text/css';
        style.innerText = '@keyframes ballStop {from {transform: rotate(0deg);}to{transform: rotate(-'+degree+'deg);}}';
        document.head.appendChild(style);
      }, 2000);
      setTimeout(() => {
        // this.ballTrack.nativeElement.style.cssText = 'animation: ballStop 3s linear;';
        this.ballTrack.nativeElement.style.cssText = 'transform: rotate(-'+degree+'deg);';
      }, 9000);
      setTimeout(() => {
        // this.wheel.nativeElement.style.cssText = '';
        // style.remove();
      }, 10000);
    }
  
    removeChips(){
      // use Angular's built-in methods to manipulate the DOM
      // for example:
      // const chips = this.bettingBoard.nativeElement.querySelectorAll('.chip');
      // if(chips.length > 0){
      //   for(let i = 0; i < chips.length; i++){
      //     chips[i].remove();
      //   }
      //   this.removeChips();
      // }
    }
  }