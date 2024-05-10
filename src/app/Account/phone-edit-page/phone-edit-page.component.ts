import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-phone-edit-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './phone-edit-page.component.html',
  styleUrl: './phone-edit-page.component.scss'
})
export class PhoneEditPageComponent {
  form!: FormGroup;
  
  ngOnInit(): void {
    this.form = new FormGroup({
      phone: new FormControl('', [Validators.required]),
    });
    
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Phone - ', this.form.get('phone')?.value);
     
    } else {
      console.log('Form is bruh');
    }
  }

}
