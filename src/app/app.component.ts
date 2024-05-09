import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { CorouselComponent } from "./corousel/corousel.component";
import { MainComponent } from "./main/main.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, HeaderComponent, CorouselComponent, MainComponent, RouterModule, RouterLink]
})
export class AppComponent {
  title = 'TemporaryCasino';
}
