import { trigger, state, style, animate, transition } from '@angular/animations';

export const wheelRotateAnimation = trigger('wheelRotateAnimation', [
  state('start', style({
    transform: 'rotate(0deg)'
  })),
  state('end', style({
    transform: 'rotate(359deg)'
  })),
  transition('start => end', animate('5s')),
]);

export const ballRotateAnimation = trigger('ballRotateAnimation', [
  state('start', style({
    transform: 'rotate(0deg)'
  })),
  state('end', style({
    transform: 'rotate(-359deg)'
  })),
  transition('start => end', animate('1s')),
]);
