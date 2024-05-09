import { Component } from '@angular/core';
import { Country } from '../../Interfaces/Countries';
import { CommonModule } from '@angular/common';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
    selector: 'app-registration-step1',
    standalone: true,
    templateUrl: './registration-step1.component.html',
    styleUrl: './registration-step1.component.scss',
    imports: [CommonModule, NgxCountriesDropdownModule,RouterModule]
})
export class RegistrationStep1Component {
  
  countries: Country[] = [
    {
      title: "Ukraine",
      path: "assets/img/flags/icons8-украина-32.png",
      number: "+380",
      val: "ua"
    },
    {
      title: "Moldova",
      path: "assets/img/flags/icons8-молдавия-32.png",
      number: "+373",
      val: "md"
    },
    {
      title: "Germany",
      path: "assets/img/flags/icons8-германия-32.png",
      number: "+49",
      val: "gr"
    },
  ]
  constructor(private router: Router){

  }
  next(){
    this.router.navigate(['/registration2'])
  }
}
