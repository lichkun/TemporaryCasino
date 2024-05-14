import { Component } from '@angular/core';
import { LeadertableComponent } from '../leadertable/leadertable.component';
import { ProfitcardsComponent } from '../profitcards/profitcards.component';

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [LeadertableComponent,ProfitcardsComponent],
  templateUrl: './leaderboard.component.html',
  styleUrl: './leaderboard.component.scss'
})
export class LeaderboardComponent {

}
