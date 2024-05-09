import { Component } from '@angular/core';
import { Game } from '../Interfaces/game';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-play-it-now',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-it-now.component.html',
  styleUrl: './play-it-now.component.scss'
})
export class PlayItNowComponent {
  games: Game[] = [
    {
      title: "gates of olympus",
      path: "assets/img/slots/gates-of-olympus-slot.jpg"
    },
    {
      title: "gates of olympus",
      path: "assets/img/slots/the-dog-house-slot-1.jpg"
    }
    ,{
      title: "gates of olympus",
      path: "assets/img/slots/Juicy-Fruits-Slot-2022.2e16d0ba.fill-600x340.webp" 
    },
    {
      title: "gates of olympus",
      path: "assets/img/slots/images.jpg"
    },
  ];
}
