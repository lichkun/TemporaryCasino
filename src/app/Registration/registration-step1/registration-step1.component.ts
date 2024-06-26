import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-registration-step1',
    standalone: true,
    templateUrl: './registration-step1.component.html',
    styleUrl: './registration-step1.component.scss', 
    imports: [CommonModule, NgxCountriesDropdownModule,RouterModule, ReactiveFormsModule]
})
export class RegistrationStep1Component {
  isVisible: boolean= false;
  form!: FormGroup;

  toggleEdit() {
    this.isVisible = !this.isVisible;
  }
  

  constructor(private router: Router){

  }
  next(){
    if (this.form.valid) {
      sessionStorage.setItem('registrationEmail', this.form.get('email')!.value);
      sessionStorage.setItem('registrationPassword', this.form.get('password')!.value);
      this.router.navigate(['/registration2']);
    } else {
      console.log('Form is invalid');
    }
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$")
      ]),
      ageConfirmation: new FormControl(false, Validators.requiredTrue)
    });
    
  }


}
