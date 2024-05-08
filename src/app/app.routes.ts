import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';
import { LoginPageComponent } from './Account/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registration', component: RegistrationStep1Component },
  { path: 'login', component: LoginPageComponent }
];

