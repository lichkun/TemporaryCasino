import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-corousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './corousel.component.html',
  styleUrls: ['./corousel.component.scss']
})
export class CorouselComponent   {
  images: string[] = [
    'assets/img/1852x350_desktop_ua 1.png',
    'assets/img/1852x350_desktop_ua 1.png',
    'assets/img/1852x350_desktop_ua 1.png',
  ];

  currentSlide: number = 0;

  get currentTransform(): string {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  next(): void {
    this.currentSlide = (this.currentSlide + 1) % this.images.length;
  }

  prev(): void {
    this.currentSlide = (this.currentSlide - 1) % this.images.length;
  }

}