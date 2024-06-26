import { Component } from '@angular/core';
import { UserDetailsFormComponent } from '../user-details-form/user-details-form.component';
import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

import { User } from '../../Interfaces/User';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserDetailsFormComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  user: User | null = null;

  constructor(private authService: AuthorizationService,  private router: Router){

    

  }


  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.authService.getCurrentUser().subscribe({
        next: (response) => {
          this.user = response;
          console.log('User data:', this.user);
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        }
      });
    } else {
      this.router.navigate(['/login']);
    }
  }

  

}
