import { Component } from '@angular/core';
import { UserDetailsFormComponent } from '../user-details-form/user-details-form.component';
import { AuthorizationService } from '../../Services/authorization.service';
import { Router } from '@angular/router';

import { User } from '../../Interfaces/User';
import { FileUploadService } from '../../Services/file-upload.service';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [UserDetailsFormComponent, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  
  user: User | null = null;
  selectedFile: File | null = null;
  baseUrl = 'https://localhost:7105'; // Базовый URL вашего сервера

  constructor(
    private authService: AuthorizationService,
    private fileUploadService: FileUploadService,
    private router: Router
  ) {}

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

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile && this.user?.id) {
      this.fileUploadService.uploadFile(this.selectedFile, this.user.id.toString()).subscribe({
        next: (response) => {
          console.log('File uploaded successfully:', response);
          if (response && response.path) {
            this.user!.pfp = response.path; 
            window.location.reload();
          }
        },
        error: (error) => {
          console.error('Error uploading file:', error);
        }
      });
    }

  

}
}
