import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';

@Component({
  selector: 'app-registration-step3',
  standalone: true,
  imports: [ NgxCountriesDropdownModule, RouterModule],
  templateUrl: './registration-step3.component.html',
  styleUrl: './registration-step3.component.scss'
})
export class RegistrationStep3Component {
  constructor(private router: Router){

  }
  next(){
    this.router.navigate([''])
  }
}
