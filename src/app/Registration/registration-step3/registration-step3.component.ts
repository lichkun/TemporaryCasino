import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { FormControl, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from '../../Services/authorization.service';

@Component({
  selector: 'app-registration-step3',
  standalone: true,
  imports: [ NgxCountriesDropdownModule, RouterModule, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './registration-step3.component.html',
  styleUrl: './registration-step3.component.scss'
})
export class RegistrationStep3Component {
  constructor(private router: Router, private authService: AuthorizationService){

  }

  form!: FormGroup;

  

  
  
  ngOnInit(): void {
    this.form = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.pattern("[A-Z][a-zA-Z]{0,31}")]),
      Surname: new FormControl('', [Validators.required, Validators.pattern("[A-Z][a-zA-Z]{0,31}")]),
      City: new FormControl('',[Validators.required, Validators.pattern("[A-Z][a-zA-Z]{0,31}")]),
      Day: new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,2}")]),
      Month: new FormControl('', [Validators.required, Validators.pattern("[0-9]{1,2}")]),
      Year: new FormControl('', [Validators.required, Validators.pattern("\\d{4}")]),
  
    });
    
  }

  onSubmit() {
   
  }

  next(){
    if (this.form.valid) {
      console.log('Form is valid!');
  
      const user = {
        email: sessionStorage.getItem('registrationEmail'),
        password: sessionStorage.getItem('registrationPassword'),
        phone: sessionStorage.getItem('registrationPhone'),
        first_Name: this.form.get('Name')!.value,
        last_Name: this.form.get('Surname')!.value,
        city: 'test',
        cityId: 1,
        birthday: '2000-01-01',
        pfp: '',
        balance: 0
      };
  
      this.authService.createUser(user).subscribe({
        next: (response) => {
          console.log('User created successfully:', response);
        },
        error: (error) => {
          console.error('Error creating user:', error);
          console.log(user); // Logging the user object here
        }
      });

      this.router.navigate([''])
  
    } else {
      console.log('Form is invalid');
      console.log('Day:', this.form.get('Day')?.value);
      console.log('Month:', this.form.get('Month')?.value);
      console.log('Year:', this.form.get('Year')?.value);
    }
    
  }

  
  }

  
