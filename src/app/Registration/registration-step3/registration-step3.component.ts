import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { FormControl, FormGroup, FormsModule, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-step3',
  standalone: true,
  imports: [ NgxCountriesDropdownModule, RouterModule, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './registration-step3.component.html',
  styleUrl: './registration-step3.component.scss'
})
export class RegistrationStep3Component {
  constructor(private router: Router){

    

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
    if(this.form.valid) console.log('Valid!')
      else  console.log('Not Valid!')
    if (this.form.valid) {
      console.log(this.form.get('Day')?.value + '' + this.form.get('Month')?.value + '' + this.form.get('Year')?.value)
     
    } else {
      console.log('Form is bruh' + this.form.get('Day')?.value + '' + this.form.get('Month')?.value + '' + this.form.get('Year')?.value);

    }
  }

  next(){
    this.router.navigate([''])
  }

  
  }

  
