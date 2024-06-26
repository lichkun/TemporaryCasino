import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-phone-edit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './phone-edit-page.component.html',
  styleUrl: './phone-edit-page.component.scss'
})
export class PhoneEditPageComponent {
  form!: FormGroup;

  constructor(private authService: AuthorizationService, private router: Router) {}
  
  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl('', [Validators.required]),
    });
    
  }

  onSubmit() {
    if (this.form.valid) {
      const newPhone = this.form.get('phone')?.value;

      this.authService.updateUserPhone(newPhone).subscribe(
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
