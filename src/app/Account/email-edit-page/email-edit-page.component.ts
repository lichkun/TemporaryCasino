import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-edit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './email-edit-page.component.html',
  styleUrl: './email-edit-page.component.scss'
})

export class EmailEditPageComponent {

  form!: FormGroup;

  constructor(private authService: AuthorizationService, private router: Router) {}


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
      const newEmail = this.form.get('email')?.value;

      this.authService.updateUserEmail(newEmail).subscribe(
        response => {
          console.log('Phone updated successfully:', response);
          this.router.navigate(['/user-profile']);
        },
        error => {
          console.error('Error updating phone:', error);
          
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
