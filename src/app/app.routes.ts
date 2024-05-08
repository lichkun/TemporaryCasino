import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registration', component: RegistrationStep1Component }
];

