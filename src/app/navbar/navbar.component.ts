import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Game } from '../Interfaces/game';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  games: Game[] = [
    {
      title: "favourite",
      path: "assets/img/1828884 1.svg"
    },
    {
      title: "all games",
      path: "assets/img/triangle.svg"
    },
    {
      title: "slots",
      path: "assets/img/triangle.svg"
    },
    {
      title: "new",
      path: "assets/img/triangle.svg"
    },
    {
      title: "wheel",
      path: "assets/img/triangle.svg"
    },
    {
      title: "roullettes",
      path: "assets/img/triangle.svg"
    },
  ];
}

