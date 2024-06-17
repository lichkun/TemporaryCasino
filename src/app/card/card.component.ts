import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-card',
  templateUrl: './card.component.html',
  imports: [CommonModule],
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() number: string | number | null = null;
  @Input() suit: string | null = null;

  get combo(): string | null {
    return this.number ? `${this.number}${this.suit}` : null;
  }

  get color(): string {
    return this.suit === '♦' || this.suit === '♥' ? 'card-red' : 'card';
  }
}
