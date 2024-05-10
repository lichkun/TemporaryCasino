import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-email-edit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './email-edit-page.component.html',
  styleUrl: './email-edit-page.component.scss'
})

export class EmailEditPageComponent {

  form!: FormGroup;


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$")
      ]),
    });
    
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Email - ', this.form.get('email')?.value);
      console.log('Password - ', this.form.get('password')?.value);
    } else {
      console.log('Form is bruh');
    }

  }
}
