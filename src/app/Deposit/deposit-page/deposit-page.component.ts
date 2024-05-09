
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-deposit-page',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.scss']
})
export class DepositPageComponent {
  amount: number = 0;

  constructor() { }

  updateAmount(value: number) {
    this.amount = value;
  }
}
