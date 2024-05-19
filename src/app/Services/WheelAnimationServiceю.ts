import { Injectable } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Injectable()
export class WheelAnimationService {
  spinWheel(winningSpin: number) {
    const degree = this.calculateDegree(winningSpin);
    return trigger('spinWheel', [
      transition(':enter', [
        style({ transform: 'rotate(0deg)' }),
        animate('5s linear', style({ transform: `rotate(${degree}deg)` })),
      ]),
      transition(':leave', [
        style({ transform: `rotate(${degree}deg)` }),
        animate('3s linear', style({ transform: 'rotate(0deg)' })),
      ]),
    ]);
  }

  private calculateDegree(winningSpin: number): number {
    return (winningSpin * 9.73) + 362;
  }
}