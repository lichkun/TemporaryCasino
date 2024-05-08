import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PlayItNowComponent } from "../play-it-now/play-it-now.component";
import { CorouselComponent } from "../corousel/corousel.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [NavbarComponent, PlayItNowComponent, CorouselComponent]
})
export class MainComponent {

}
