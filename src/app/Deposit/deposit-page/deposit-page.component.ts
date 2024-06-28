
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AuthorizationService } from '../../Services/authorization.service';
import { BalanceService } from '../../Services/balance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deposit-page',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './deposit-page.component.html',
  styleUrls: ['./deposit-page.component.scss']
})
export class DepositPageComponent {
  amount: number = 0;

  constructor(private authService: AuthorizationService, private balanceService: BalanceService, private router: Router){

    

  }


  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']);
    } else {

    }
  }

  updateAmount(value: number) {
    this.amount = value;
  }

  onSetAmount() {

    this.balanceService.depositSumm(this.amount).subscribe({
      next: (response) => {
        this.router.navigate(['/']); 
      },
      error: (error) => {
        console.error('Error fetching user data:', error);
      }
    });

    
    
  }
}
