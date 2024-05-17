import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = [
    { id: 1, name: 'Nikita', amountSpent: 6500, dailyProfit: 100, weeklyProfit: 100, monthlyProfit: 3000, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQS3lhUzgzOXS0cRyDipxx8Hn2yvfWKhdjq4rW0Foaww&s' },
    { id: 2, name: 'Jane', amountSpent: 50, dailyProfit: 10, weeklyProfit: 70, monthlyProfit: 300, avatar: 'https://example.com/jane-avatar.jpg' },
    { id: 3, name: 'Doe', amountSpent: 200, dailyProfit: 120, weeklyProfit: 210, monthlyProfit: 900, avatar: 'https://media.tenor.com/HKtsnhY1cwUAAAAe/hedgehog-hedgehog-chew.png' },
    { id: 4, name: 'Michael', amountSpent: 150, dailyProfit: 20, weeklyProfit: 140, monthlyProfit: 600, avatar: 'https://example.com/michael-avatar.jpg' },
    { id: 5, name: 'Emily', amountSpent: 75, dailyProfit: 15, weeklyProfit: 105, monthlyProfit: 450, avatar: 'https://example.com/emily-avatar.jpg' },
    { id: 6, name: 'William', amountSpent: 300, dailyProfit: 50, weeklyProfit: 350, monthlyProfit: 1500, avatar: 'https://example.com/william-avatar.jpg' },
    { id: 7, name: 'Emma', amountSpent: 120, dailyProfit: 25, weeklyProfit: 175, monthlyProfit: 750, avatar: 'https://example.com/emma-avatar.jpg' },
    { id: 8, name: 'David', amountSpent: 180, dailyProfit: 30, weeklyProfit: 210, monthlyProfit: 900, avatar: 'https://example.com/david-avatar.jpg' },
    { id: 9, name: 'Olivia', amountSpent: 90, dailyProfit: 15, weeklyProfit: 105, monthlyProfit: 450, avatar: 'https://example.com/olivia-avatar.jpg' },
    { id: 10, name: 'James', amountSpent: 250, dailyProfit: 40, weeklyProfit: 280, monthlyProfit: 1200, avatar: 'https://example.com/james-avatar.jpg' },
    { id: 11, name: 'Sophia', amountSpent: 110, dailyProfit: 20, weeklyProfit: 140, monthlyProfit: 600, avatar: 'https://example.com/sophia-avatar.jpg' },
    { id: 12, name: 'Daniel', amountSpent: 220, dailyProfit: 35, weeklyProfit: 245, monthlyProfit: 1050, avatar: 'https://example.com/daniel-avatar.jpg' },
    { id: 13, name: 'Ava', amountSpent: 130, dailyProfit: 20, weeklyProfit: 140, monthlyProfit: 600, avatar: 'https://example.com/ava-avatar.jpg' },
    { id: 14, name: 'Alexander', amountSpent: 160, dailyProfit: 25, weeklyProfit: 175, monthlyProfit: 750, avatar: 'https://example.com/alexander-avatar.jpg' },
    { id: 15, name: 'Charlotte', amountSpent: 350, dailyProfit: 60, weeklyProfit: 420, monthlyProfit: 1800, avatar: 'https://cdn.techinasia.com/wp-content/uploads/2014/05/rappy.jpg' }
];


  getUsers() {
    return this.users;
  }

  getTopUsers() {
    return this.users.slice().sort((a, b) => b.amountSpent - a.amountSpent).slice(0, 10);
  }

  getTopUsersByDailyProfit() {
    return this.users.slice().sort((a, b) => b.dailyProfit - a.dailyProfit)[0];
  }

  getTopUsersByWeeklyProfit() {
    return this.users.slice().sort((a, b) => b.weeklyProfit - a.weeklyProfit)[0];
  }

  getTopUsersByMonthlyProfit() {
    return this.users.slice().sort((a, b) => b.monthlyProfit - a.monthlyProfit)[0];
  }





  constructor() { }
}
