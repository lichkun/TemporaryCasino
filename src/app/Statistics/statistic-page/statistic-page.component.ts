import { Component } from '@angular/core';
import { DayStatisticsComponent } from '../day-statistics/day-statistics.component';
import { MonthStatisticComponent } from '../month-statistic/month-statistic.component';
import { FavouriteGameComponent } from '../favourite-game/favourite-game.component';
import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistic-page',
  standalone: true,
  imports: [DayStatisticsComponent,MonthStatisticComponent,FavouriteGameComponent],
  templateUrl: './statistic-page.component.html',
  styleUrl: './statistic-page.component.scss'
})
export class StatisticPageComponent {


  constructor(private authService: AuthorizationService,  private router: Router){

    

  }


  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (!userId) {
      this.router.navigate(['/login']);
    } else {

    }
  }

}
