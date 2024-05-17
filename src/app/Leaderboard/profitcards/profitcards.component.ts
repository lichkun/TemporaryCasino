import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../Services/users.service';
@Component({
  selector: 'app-profitcards',
  standalone: true,
  imports: [],
  templateUrl: './profitcards.component.html',
  styleUrl: './profitcards.component.scss'
})
export class ProfitcardsComponent {
  topDailyProfitUser: any;
  topWeeklyProfitUser: any;
  topMonthlyProfitUser: any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.topDailyProfitUser = this.userService.getTopUsersByDailyProfit();
    this.topWeeklyProfitUser = this.userService.getTopUsersByWeeklyProfit();
    this.topMonthlyProfitUser = this.userService.getTopUsersByMonthlyProfit();
  }



}
