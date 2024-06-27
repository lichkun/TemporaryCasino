import { CommonModule } from '@angular/common';
import {  Component, ElementRef,  Renderer2, ViewChild } from '@angular/core';
import { AuthorizationService } from '../Services/authorization.service';
import { Router } from '@angular/router';
import { GameService } from '../Services/blackjack.service';



@Component({
  selector: 'app-roullette',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './roullette.component.html',
  styleUrl: './roullette.component.scss',
 })
 export class RoulletteComponent  {



  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']);
    } else {

    }
    this.authService.authentificate(Number(userId));
    this.authService.getCurrentUser().subscribe(
      cuurrentuser => {
        if (cuurrentuser) {
          this.bankValue = cuurrentuser.balance || 0;
        } 
      },
    );
  }
    wheelAnimation: string = "end";
    bankValue: number = 1000;
    currentBet:number = 0;
    wager: number = 5;
    bet:any = [];
    numbersBet:number[] = [];
    previousNumbers = [];
    lastWager:number = 0;
    isSpinBtn:boolean=false;
    showNotification:boolean = false;
    numRed:number[] = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    wheelnumbersAC:number[] = [0, 26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16, 24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];
    isPlacingBet: boolean = true;
    blocks: number[] = Array.from({ length: 11 }, (_, i) => i + 1);

    constructor(private el: ElementRef, private renderer: Renderer2, private authService: AuthorizationService,  private router: Router, private gameService : GameService) {}

    @ViewChild('pnContent') pnContent!: ElementRef;
    @ViewChild('container') container!: ElementRef;
    @ViewChild('wheel') wheel!: ElementRef;
    @ViewChild('ballTrack') ballTrack!: ElementRef;
   
    sections = [
      { id: 1, value: 0, type: 'single' },
      { id: 2, value: 32, type: 'double' },
      { id: 3, value: 15, type: 'double' },
      { id: 4, value: 19, type: 'double' },
      { id: 5, value: 4, type: 'single' },
      { id: 6, value: 21, type: 'double' },
      { id: 7, value: 2, type: 'single' },
      { id: 8, value: 25, type: 'double' },
      { id: 9, value: 17, type: 'double' },
      { id: 10, value: 34, type: 'double' },
      { id: 11, value: 6, type: 'single' },
      { id: 12, value: 27, type: 'double' },
      { id: 13, value: 13, type: 'double' },
      { id: 14, value: 36, type: 'double' },
      { id: 15, value: 11, type: 'double' },
      { id: 16, value: 30, type: 'double' },
      { id: 17, value: 8, type: 'single' },
      { id: 18, value: 23, type: 'double' },
      { id: 19, value: 10, type: 'double' },
      { id: 20, value: 5, type: 'single' },
      { id: 21, value: 24, type: 'double' },
      { id: 22, value: 16, type: 'double' },
      { id: 23, value: 33, type: 'double' },
      { id: 24, value: 1, type: 'single' },
      { id: 25, value: 20, type: 'double' },
      { id: 26, value: 14, type: 'double' },
      { id: 27, value: 31, type: 'double' },
      { id: 28, value: 9, type: 'single' },
      { id: 29, value: 22, type: 'double' },
      { id: 30, value: 18, type: 'double' },
      { id: 31, value: 29, type: 'double' },
      { id: 32, value: 7, type: 'single' },
      { id: 33, value: 28, type: 'double' },
      { id: 34, value: 12, type: 'double' },
      { id: 35, value: 35, type: 'double' },
      { id: 36, value: 3, type: 'single' },
      { id: 37, value: 26, type: 'double' }
    ];
    numbers: any[] = [
      { value: 3, color: 'number_block redNum' },
      { value: 6, color: 'number_block blackNum' },
      { value: 9, color: 'number_block redNum' },
      { value: 12, color: 'number_block redNum' },
      { value: 15, color: 'number_block blackNum' },
      { value: 18, color: 'number_block redNum' },
      { value: 21, color: 'number_block redNum' },
      { value: 24, color: 'number_block blackNum' },
      { value: 27, color: 'number_block redNum' },
      { value: 30, color: 'number_block redNum' },
      { value: 33, color: 'number_block blackNum' },
      { value: 36, color: 'number_block redNum' },
      { value: '2 to 1', color: 'tt1_block' },
      { value: 2, color: 'number_block blackNum' },
      { value: 5, color: 'number_block redNum' },
      { value: 8, color: 'number_block blackNum' },
      { value: 11, color: 'number_block blackNum' },
      { value: 14, color: 'number_block redNum' },
      { value: 17, color: 'number_block blackNum' },
      { value: 20, color: 'number_block blackNum' },
      { value: 23, color: 'number_block redNum' },
      { value: 26, color: 'number_block blackNum' },
      { value: 29, color: 'number_block blackNum' },
      { value: 32, color: 'number_block redNum' },
      { value: 35, color: 'number_block blackNum' },
      { value: '2 to 1', color: 'tt1_block' },
      { value: 1, color: 'number_block redNum' },
      { value: 4, color: 'number_block blackNum' },
      { value: 7, color: 'number_block redNum' },
      { value: 10, color: 'number_block blackNum' },
      { value: 13, color: 'number_block blackNum' },
      { value: 16, color: 'number_block redNum' },
      { value: 19, color: 'number_block redNum' },
      { value: 22, color: 'number_block blackNum' },
      { value: 25, color: 'number_block redNum' },
      { value: 28, color: 'number_block blackNum' },
      { value: 31, color: 'number_block blackNum' },
      { value: 34, color: 'number_block redNum' },
      { value: '2 to 1', color: 'tt1_block' }
    ];
    chips: any[] = [
      { value: 1, color: 'red', active: false },
      { value: 5, color: 'blue', active: false },
      { value: 10, color: 'orange', active: false },
      { value: 100, color: 'gold', active: false },
    ];
  
    ngAfterViewInit(): void {
      this.addWheelListener();
    }

    toggleChipActive(chip: any, val: number) {
      this.chips.forEach((c) => {
        c.active = false; 
      });
      chip.active = true; 
      this.wager = val;
    }
    clearBet(){
      
      this.bet = [];
      this.numbersBet = [];
    }
    resetGame(){
      this.bankValue = 1000;
      this.currentBet = 0;
      this.wager = 5;
      this.bet = [];
      this.numbersBet = [];
      this.previousNumbers = [];
	    this.showNotification = false;
    }
    generateNumbersArray(length: number): number[] {
      return Array(length).fill(0).map((_, i) => i + 1);
    }
    gameOver(){
      this.showNotification = true;
    }
    calculateNumbers(block: number): string {
      let numA = 1 + (3 * (block - 1));
      let numB = 2 + (3 * (block - 1));
      let numC = 3 + (3 * (block - 1));
      let numD = 4 + (3 * (block - 1));
      let numE = 5 + (3 * (block - 1));
      let numF = 6 + (3 * (block - 1));
      let num = numA + ', ' + numB + ', ' + numC + ', ' + numD + ', ' + numE + ', ' + numF;
      return num;
    }
    setBet(event: MouseEvent, n: string, t: string, o: number) {
      if (!this.isPlacingBet) {
        return; 
      }
	    this.lastWager = this.wager;
      this.wager = (this.bankValue < this.wager) ? this.bankValue : this.wager;
      if (this.wager > 0) {
        if(!this.isSpinBtn){
          this.isSpinBtn = !this.isSpinBtn;
        }
        this.bankValue -= this.wager;
        this.currentBet += this.wager;

        for (let i = 0; i < this.bet.length; i++) {
          if (this.bet[i].numbers === n && this.bet[i].type === t) {
            this.bet[i].amt += this.wager;
            let chipColour = (this.bet[i].amt < 5)? 'red' : ((this.bet[i].amt < 10)? 'blue' : ((this.bet[i].amt < 100)? 'orange' : 'gold'));
            this.el.nativeElement.querySelector('.chip').style.cssText = '';
            this.el.nativeElement.querySelector('.chip').setAttribute('class', 'chip ' + chipColour);
            let chipSpan = this.el.nativeElement.querySelector('.chipSpan');
            chipSpan.innerText = this.bet[i].amt;
            return;
          }
        }

        let obj = {
          amt: this.wager,
          type: t,
          odds: o,
          numbers: n
        };
        this.bet.push(obj);

        const numArray: number[] = n.toString().split(',').map(Number);
        numArray.forEach(num => {
          if (!this.numbersBet.includes(num)) {
            this.numbersBet.push(num);
          }
        });
		      if(!(event.target as HTMLElement).querySelector('.chip')){
            let chipColour = (this.wager < 5) ? 'red' : ((this.wager < 10) ? 'blue' : ((this.wager < 100) ? 'orange' : 'gold'));
            const chip = this.renderer.createElement('div');
            this.renderer.addClass(chip, 'chip');
            this.renderer.addClass(chip, chipColour);
            this.renderer.setStyle(chip, "display", "block");
        
            const chipSpan = this.renderer.createElement('span');
            this.renderer.addClass(chipSpan, 'chipSpan');
            this.renderer.setProperty(chipSpan, 'innerText', this.wager.toString());
        
            this.renderer.appendChild(chip, chipSpan);
            this.renderer.appendChild(event.target, chip);
          }
      }
    }

    removeBet(event: MouseEvent, num: string, objType: string, param: number) {
      event.preventDefault();
      event.stopPropagation();
      if (!this.isPlacingBet) {
        return; 
      }
      const wager = this.wager || 100;
      const betToUpdate = this.bet.find((b:any) => b.numbers === num && b.type === objType);
      if (betToUpdate && betToUpdate.amt > 0) {
        const newAmt = Math.max(0, betToUpdate.amt - wager);
        this.bet = this.bet.map((b:any) => b === betToUpdate ? { ...b, amt: newAmt } : b);
        this.bankValue += wager;
        this.currentBet -= wager;
        if (newAmt === 0) {
          this.el.nativeElement.querySelector('.chip').style.display="none";
        } else {
          this.el.nativeElement.querySelector('.chip').classList.add(this.getChipClass(newAmt));
          this.el.nativeElement.querySelector('.chipSpan').innerText = newAmt.toString();
        }

      }
    }
    getChipClass(amt: number): string {
      if (amt < 5) return 'ed';
      if (amt < 10) return 'blue';
      if (amt < 100) return 'orange';
      return 'gold';
    }
    setnumBet(event: MouseEvent, num: string, objType: string, odd: number, a: number) {
      if (num === '2 to 1') {
          num = (a === 12) ? '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36' :
                (a === 25) ? '2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35' :
                             '1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34';
          objType = 'outside_column';
          odd = 2;
      }
      this.setBet(event,num, objType, odd)

    }
  
    removenumBet(event: MouseEvent, num: string, objType: string, odd: number, a: number) {
        event.preventDefault();
        if (num === '2 to 1') {
            num = (a === 12) ? '3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36' :
                  (a === 25) ? '2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35' :
                              '1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34';
            objType = 'outside_column';
            odd = 2;
        }
        this.removeBet(event,num, objType, odd)
    }
    setttbBet(event: MouseEvent, i: number, block: number) {
      event.stopPropagation(); 
    
      let d = i + 1;
      let j = block - 1;
      let numA, numB, numC, num, objType, odd;
    
      if (d == 1 || d == 2) {
        numA = (2 - (d - 1)) + (3 * j);
        numB = (3 - (d - 1)) + (3 * j);
        num = numA + ', ' + numB;
      } else {
        numA = 1 + (3 * j);
        numB = 2 + (3 * j);
        numC = 3 + (3 * j);
        num = numA + ', ' + numB + ', ' + numC;
      }
    
      objType = (d == 3) ? 'street' : 'split';
      odd = (d == 3) ? 11 : 17;
    
      this.setBet(event,num, objType, odd);
    }
    removettbBet(event: MouseEvent, i: number, block: number) {
      event.preventDefault(); 
    
      let d = i + 1;
      let j = block - 1;
      let numA, numB, numC, num, objType, odd;
    
      if (d == 1 || d == 2) {
        numA = (2 - (d - 1)) + (3 * j);
        numB = (3 - (d - 1)) + (3 * j);
        num = numA + ', ' + numB;
      } else {
        numA = 1 + (3 * j);
        numB = 2 + (3 * j);
        numC = 3 + (3 * j);
        num = numA + ', ' + numB + ', ' + numC;
      }
    
      objType = (d == 3) ? 'street' : 'split';
      odd = (d == 3) ? 11 : 17;
    
      this.removeBet(event,num, objType, odd);
    }
    setrtlBet(event: MouseEvent,c: number, j: number) {
      const numA = (3 + (3 * (c - 1))) - (j - 1);
      const numB = (6 + (3 * (c - 1))) - (j - 1);
      const num = numA + ', ' + numB;
      const objType = 'split';
      const odd = 17;
      this.setBet(event,num, objType, odd)
    }
  
    removertlBet(event: MouseEvent, c: number, j: number) {
      event.preventDefault();
      const numA = (3 + (3 * (c - 1))) - (j - 1);
      const numB = (6 + (3 * (c - 1))) - (j - 1);
      const num = numA + ', ' + numB;
      const objType = 'split';
      const odd = 17;
      this.removeBet(event,num, objType, odd);
    }
    setcbBet(event: MouseEvent,count: number) {
      const numA = '2';
      const numB = '3';
      const numC = '5';
      const numD = '6';
      let num: string;
      if (count >= 1 && count < 12) {
        num = `${parseInt(numA) + (count - 1) * 3}, ${parseInt(numB) + (count - 1) * 3}, ${parseInt(numC) + (count - 1) * 3}, ${parseInt(numD) + (count - 1) * 3}`;
      } else {
        num = `${parseInt(numA) - 1 + (count - 12) * 3}, ${parseInt(numB) - 1 + (count - 12) * 3}, ${parseInt(numC) - 1 + (count - 12) * 3}, ${parseInt(numD) - 1 + (count - 12) * 3}`;
      }
      const objType = 'corner_bet';
      const odd = 8;
      this.setBet(event,num, objType, odd)

    }
  
    removecbBet(event: MouseEvent, count: number) {
      event.preventDefault();
      const numA = '2';
      const numB = '3';
      const numC = '5';
      const numD = '6';
      let num: string;
      if (count >= 1 && count < 12) {
        num = `${parseInt(numA) + (count - 1) * 3}, ${parseInt(numB) + (count - 1) * 3}, ${parseInt(numC) + (count - 1) * 3}, ${parseInt(numD) + (count - 1) * 3}`;
      } else {
        num = `${parseInt(numA) - 1 + (count - 12) * 3}, ${parseInt(numB) - 1 + (count - 12) * 3}, ${parseInt(numC) - 1 + (count - 12) * 3}, ${parseInt(numD) - 1 + (count - 12) * 3}`;
      }
      const objType = 'corner_bet';
      const odd = 8;
      this.removeBet(event,num, objType, odd)

      
    }
    removeChips() {
      const chips = document.getElementsByClassName('chip');
      if (chips.length > 0) {
          for (let i = 0; i < chips.length; i++) {
              chips[i].remove();
          }
          this.removeChips();
      }
    }
    clearBetHandler() {
      if (!this.isPlacingBet) {
        return; 
      }
      this.bankValue += this.currentBet;
      this.currentBet = 0;
      this.clearBet();
      this.removeChips();
    }
    addWheelListener(): void {
      if (this.pnContent) {
        this.pnContent.nativeElement.addEventListener('wheel', (e: WheelEvent) => {
          e.preventDefault();
          this.pnContent.nativeElement.scrollLeft += e.deltaY;
        });
      }
    }
 
    spin(){
        this.gameService.placeBet(this.wager)
        this.isSpinBtn = !this.isSpinBtn;
        this.isPlacingBet = false;
        const winningSpin = Math.floor(Math.random() * 36);
        this.spinWheel(winningSpin);
        setTimeout(() => {
        if (this.numbersBet.includes(winningSpin)) {
          
          let winValue = 0;
          let betTotal = 0;
          this.bet.forEach((betItem: any) => {
            const numArray = betItem.numbers.split(',').map(Number);
            if (numArray.includes(winningSpin)) {
              this.bankValue += betItem.odds * betItem.amt + betItem.amt;
              winValue += betItem.odds * betItem.amt;
              betTotal += betItem.amt;
              this.gameService.winBet(betItem.odds * betItem.amt + betItem.amt)
            }
          });
          this.win(winningSpin, winValue, betTotal);
        }

        this.currentBet = 0;

        const pnClass = (this.numRed.includes(winningSpin)) ? 'pnRed' : ((winningSpin === 0) ? 'pnGreen' : 'pnBlack');
        const pnContent = this.pnContent.nativeElement;
        const pnSpan = this.renderer.createElement('span');
        this.renderer.setAttribute(pnSpan, 'class', pnClass);
        this.renderer.setProperty(pnSpan, 'innerText', winningSpin.toString());
        this.renderer.appendChild(pnContent, pnSpan);
        pnContent.scrollLeft = pnContent.scrollWidth;

        this.bet = [];
        this.numbersBet = [];
        this.removeChips();
        this.wager = this.lastWager;
        if (this.bankValue === 0 && this.currentBet === 0) {
          this.gameOver();
        }
        this.isPlacingBet = true;
        
      }, 7000);
      
    }
    wheelState = 'spin'; // Начальное состояние анимации
    ballState = 'spin';
    degree = 0;
    async spinWheel(winningSpin: number) {
      this.wheelState = 'spin';
      this.ballState = 'spin';
      this.degree = this.calculateDegree(winningSpin);
      // Пример изменения угла для стоп анимации
      setTimeout(() => {
        this.ballState = 'slow';
      }, 2000);
      setTimeout(() => {
        this.ballState = 'stop';
      }, 6000);
      setTimeout(() => {
        this.wheelState = 'stop';
      }, 9000);
    }
  
    calculateDegree(winningSpin: number): number {
      let degree: number=0;
      for (let i = 0; i < this.wheelnumbersAC.length; i++) {
        if (this.wheelnumbersAC[i] === winningSpin) {
          degree = (i * 9.73) + 362 *2;
          break;
        }
      }
      return degree;
    }
  
    delay(ms: number): Promise<void> {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    win(winningSpin: number, winValue: number, betTotal: number) {
      if (winValue > 0) {
        const notification = this.renderer.createElement('div');
        this.renderer.setAttribute(notification, 'id', 'notification');
    
        const nSpan = this.renderer.createElement('div');
        this.renderer.setAttribute(nSpan, 'class', 'nSpan');
    
        const nsnumber = this.renderer.createElement('span');
        this.renderer.setAttribute(nsnumber, 'class', 'nsnumber');
        const nsnumberColor = this.numRed.includes(winningSpin) ? 'red' : 'black';
        this.renderer.setStyle(nsnumber, 'color', nsnumberColor);
        this.renderer.setProperty(nsnumber, 'innerText', winningSpin.toString());
        this.renderer.appendChild(nSpan, nsnumber);
    
        const nsTxt = this.renderer.createElement('span');
        this.renderer.setProperty(nsTxt, 'innerText', ' Win');
        this.renderer.appendChild(nSpan, nsTxt);
    
        const nsWin = this.renderer.createElement('div');
        this.renderer.setAttribute(nsWin, 'class', 'nsWin');
    
        let nsWinBlock = this.renderer.createElement('div');
        this.renderer.setAttribute(nsWinBlock, 'class', 'nsWinBlock');
        this.renderer.setProperty(nsWinBlock, 'innerText', 'Bet: ' + betTotal);
        this.renderer.appendChild(nsWin, nsWinBlock);
    
        nsWinBlock = this.renderer.createElement('div');
        this.renderer.setAttribute(nsWinBlock, 'class', 'nsWinBlock');
        this.renderer.setProperty(nsWinBlock, 'innerText', 'Win: ' + winValue);
        this.renderer.appendChild(nsWin, nsWinBlock);
    
        nsWinBlock = this.renderer.createElement('div');
        this.renderer.setAttribute(nsWinBlock, 'class', 'nsWinBlock');
        this.renderer.setProperty(nsWinBlock, 'innerText', 'Payout: ' + (winValue + betTotal));
        this.renderer.appendChild(nsWin, nsWinBlock);
    
        this.renderer.appendChild(nSpan, nsWin);
        this.renderer.appendChild(notification, nSpan);
    
        this.renderer.appendChild(this.container.nativeElement, notification);
    
        setTimeout(() => {
          this.renderer.setStyle(notification, 'opacity', '0');
        }, 3000);
    
        setTimeout(() => {
          this.renderer.removeChild(this.container.nativeElement, notification);
        }, 4000);
      }
    }
  
}
  
