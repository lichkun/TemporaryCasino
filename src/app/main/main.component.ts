import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { PlayItNowComponent } from "../play-it-now/play-it-now.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [NavbarComponent, PlayItNowComponent]
})
export class MainComponent {

}
