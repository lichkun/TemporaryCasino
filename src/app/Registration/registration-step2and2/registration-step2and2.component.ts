import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-registration-step2and2',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './registration-step2and2.component.html',
  styleUrl: './registration-step2and2.component.scss'
})
export class RegistrationStep2and2Component {
  @Input() value: string = '3800000000000'; 
  isEditing = false; 
  editValue = ''; 

  edit() {
    this.editValue = this.value; 
    this.isEditing = true;
  }

  save() {
    this.value = this.editValue; 
    this.isEditing = false; 
  }

  toggleEdit() {
    if (this.isEditing) {
      this.save(); 
    } else {
      this.edit(); 
    }
  }
  constructor(private router: Router){

  }
  next(){
    this.router.navigate(['/registration3'])
  }
}
