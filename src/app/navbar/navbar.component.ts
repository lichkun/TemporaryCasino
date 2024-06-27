import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../Interfaces/game';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  games: Game[] = [
    {
      title: "favourite",
      url: "/",
      path: "assets/img/1828884 1.svg"
    },
    {
      title: "all games",
      url: "/",
      path: "assets/img/triangle.svg"
    },
    {
      title: "slots",
      url: "/",
      path: "assets/img/triangle.svg"
    },
    {
      title: "new",
      url: "/",
      path: "assets/img/triangle.svg"
    },
    {
      title: "wheel",
      url: "/",
      path: "assets/img/triangle.svg"
    },
    {
      title: "blackjack",
      url: "/blackjack/game",
      path: "assets/img/triangle.svg"
    },
    {
      title: "roullettes",
      path: "assets/img/triangle.svg",
      url: "/roullette",
    },
  ];
}

