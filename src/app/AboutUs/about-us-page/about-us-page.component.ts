import { Component } from '@angular/core';
import { TopHeaderComponent } from '../top-header/top-header.component';
import { OurHistoryComponent } from '../our-history/our-history.component';
import { OurMissionComponent } from '../our-mission/our-mission.component';

@Component({
  selector: 'app-about-us-page',
  standalone: true,
  imports: [TopHeaderComponent,OurHistoryComponent, OurMissionComponent],
  templateUrl: './about-us-page.component.html',
  styleUrl: './about-us-page.component.scss'
})
export class AboutUsPageComponent {

}
