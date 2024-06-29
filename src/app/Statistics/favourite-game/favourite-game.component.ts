import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../Services/authorization.service';
import { SessionService } from '../../Services/session.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-favourite-game',
  standalone: true,
  imports: [],
  templateUrl: './favourite-game.component.html',
  styleUrl: './favourite-game.component.scss'
})
export class FavouriteGameComponent implements OnInit {
  userId: any;
  totalSpent: any;
  totalWon: any;
  constructor(private sessionService : SessionService){}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.sessionService.getAllSession().subscribe(
      sessions => {
        if (sessions) {
          const filteredSessions = sessions.filter((session: any) => session.userId === Number(this.userId));
          console.log(filteredSessions)
          this.totalSpent = filteredSessions.reduce((sum:number, session: any) => sum + session.totalSpent, 0);
          this.totalWon = filteredSessions.reduce((sum:number, session: any) => sum + session.totalWon, 0);
        } 
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }
  

}
