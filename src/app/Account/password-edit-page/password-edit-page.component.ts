import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthorizationService, private router: Router) {}

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
      const newPassword = this.form.get('password2')?.value;

      this.authService.updateUserPassword(newPassword).subscribe(
        response => {
          console.log('Pass updated successfully:', response);
          this.router.navigate(['/user-profile']);
        },
        error => {
          console.error('Error updating Pass:', error);
          
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

}
