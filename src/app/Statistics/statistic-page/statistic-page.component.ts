import { Component } from '@angular/core';
import { DayStatisticsComponent } from '../day-statistics/day-statistics.component';
import { MonthStatisticComponent } from '../month-statistic/month-statistic.component';
import { FavouriteGameComponent } from '../favourite-game/favourite-game.component';

@Component({
  selector: 'app-statistic-page',
  standalone: true,
  imports: [DayStatisticsComponent,MonthStatisticComponent,FavouriteGameComponent],
  templateUrl: './statistic-page.component.html',
  styleUrl: './statistic-page.component.scss'
})
export class StatisticPageComponent {

}
