import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-registration-step2',
  standalone: true,
  imports: [NgxCountriesDropdownModule, RouterModule],
  templateUrl: './registration-step2.component.html',
  styleUrl: './registration-step2.component.scss'
})
export class RegistrationStep2Component {
  constructor(private router: Router){

  }
  next(){
    this.router.navigate(['/registration2and2'])
  }
}
