import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-password-edit-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule
  ],
  templateUrl: './password-edit-page.component.html',
  styleUrl: './password-edit-page.component.scss'
})
export class PasswordEditPageComponent {
  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$")
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$")
      ]),
    });
    
  }

  isTheSame(): boolean{

    if(this.form.get('password') === this.form.get('passwordConfirm')) return true;

    return false;
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
