import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-registration-step2',
  standalone: true,
  imports: [NgxCountriesDropdownModule, RouterModule, ReactiveFormsModule,CommonModule ],
  templateUrl: './registration-step2.component.html',
  styleUrl: './registration-step2.component.scss'
})
export class RegistrationStep2Component {
  form!: FormGroup;
  constructor(private router: Router){

  }
  next(){
    this.router.navigate(['/registration2and2'])
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      phoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s./0-9]*$")
      ])
  });
  
    
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Phone - ', this.form.get('phoneNumber')?.value);
    } else {
      console.log('Form is bruh');
    }
  }
}
