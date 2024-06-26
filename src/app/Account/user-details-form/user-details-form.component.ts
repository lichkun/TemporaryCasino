import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthorizationService } from '../../Services/authorization.service';

@Component({
  selector: 'app-user-details-form',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './user-details-form.component.html',
  styleUrl: './user-details-form.component.scss'
})
export class UserDetailsFormComponent {


  user: any;
  constructor(private authService: AuthorizationService){

  }

  ngOnInit(): void {
    const userId = sessionStorage.getItem('userId');
    if (userId) {
      this.authService.getCurrentUser().subscribe({
        next: (response) => {
          this.user = response;
        },
        error: (error) => {
          console.error('Error fetching user data:', error);
        }
      });
    }
  }

}
