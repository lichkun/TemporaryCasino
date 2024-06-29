import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../Services/session.service';

@Component({
  selector: 'app-day-statistics',
  standalone: true,
  imports: [],
  templateUrl: './day-statistics.component.html',
  styleUrl: './day-statistics.component.scss'
})
export class DayStatisticsComponent implements OnInit{
  userId: any;
  totalSpent: any;
  totalWon: any;
  totalSpentToday: any;
  totalWonToday: any;
  currentSessionTime: any;
  todaySessions: any;
  constructor(private sessionService : SessionService){}

  ngOnInit(): void {
    this.userId = sessionStorage.getItem('userId');
    this.sessionService.getAllSession().subscribe(
      sessions => {
        if (sessions) {
          const filteredSessions = sessions.filter((session: any) => session.userId === Number(this.userId));
          const now = new Date();
          this.todaySessions = filteredSessions.filter((session: any) => {
            const sessionDate = new Date(session.startTime);
            return sessionDate.getDate() === now.getDate() && sessionDate.getMonth() === now.getMonth() && sessionDate.getFullYear() === now.getFullYear();
          });
  
          this.totalSpentToday = this.todaySessions.reduce((sum: number, session: any) => sum + session.totalSpent, 0);
          this.totalWonToday = this.todaySessions.reduce((sum: number, session: any) => sum + session.totalWon, 0);
          this.currentSessionTime = this.todaySessions.length > 0 ? (new Date().getTime() - new Date(this.todaySessions[this.todaySessions.length - 1].startTime).getTime()) / (1000 *60) : 0;
        } 
      },
      error => {
        console.error('Error fetching user:', error);
      }
    );
  }
}
