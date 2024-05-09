import { Component } from '@angular/core';
import { UserDetailsFormComponent } from '../user-details-form/user-details-form.component';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserDetailsFormComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

}
