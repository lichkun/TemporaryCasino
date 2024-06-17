import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { GameComponent } from "../blakcjack.component";

@Component({
    selector: 'app-game-wrapper',
    standalone: true,
    templateUrl: './game-wrapper.component.html',
    styleUrl: '../blakcjack.component.scss',
    imports: [GameComponent]
})
export class GameWrapperComponent implements OnInit {

  locationState: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.locationState = history.state;
  }

}
