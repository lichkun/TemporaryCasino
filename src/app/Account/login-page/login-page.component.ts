import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { Subscription } from 'rxjs';



import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,CommonModule,
  ],
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form!: FormGroup;

  Email!: string;

  Password!: string;

  usersSubscription!: Subscription;

  private apiUrl = 'https://localhost:7105'; 


  constructor(private authService: AuthorizationService, private router: Router){

  }


  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[a-zA-Z\\d@$!%*?&]{8,}$")
      ]),
    });


    this.usersSubscription = this.authService.getUsers().subscribe({
      next: (users) => {
        console.log('Users:', users);
        // Optionally handle users data or navigate to another page upon successful retrieval
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        // Handle error or display appropriate message
      }
    });
    
  }

  onSubmit() {
    if (this.form.valid) {

      this.authService.authorizeUser(this.form.get('email')?.value, this.form.get('password')?.value).subscribe({
        next: (response) => {
          if (response && response.id) {
            sessionStorage.setItem('userId', response.id);
            this.router.navigate(['/user-profile']); 
          } else {
            console.error('User not found or invalid credentials');
          }
        },
        error: (error) => {
          console.error('Error authorizing user:', error);
        }
      });
     
    } else {
      console.log('Form is bruh');
    }
  }


  
}