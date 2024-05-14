import { MainComponent } from './main/main.component';
import { LoginPageComponent } from './Account/login-page/login-page.component';
import { UserProfileComponent } from './Account/user-profile/user-profile.component';
import { DepositPageComponent } from './Deposit/deposit-page/deposit-page.component';
import { Routes } from '@angular/router';
import { RegistrationStep2Component } from './Registration/registration-step2/registration-step2.component';
import { RegistrationStep2and2Component } from './Registration/registration-step2and2/registration-step2and2.component';
import { RegistrationStep3Component } from './Registration/registration-step3/registration-step3.component';
import { RegistrationStep1Component } from './Registration/registration-step1/registration-step1.component';
import { PasswordEditPageComponent } from './Account/password-edit-page/password-edit-page.component';
import { PhoneEditPageComponent } from './Account/phone-edit-page/phone-edit-page.component';
import { EmailEditPageComponent } from './Account/email-edit-page/email-edit-page.component';
import { LeaderboardComponent } from './Leaderboard/leaderboard/leaderboard.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registration', component: RegistrationStep1Component },
  { path: 'registration2', component: RegistrationStep2Component },
  { path: 'registration2and2', component: RegistrationStep2and2Component },
  { path: 'registration3', component: RegistrationStep3Component },
  { path: 'login', component: LoginPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'deposit', component: DepositPageComponent },
  { path: 'password-edit', component: PasswordEditPageComponent },
  { path: 'phone-edit', component: PhoneEditPageComponent },
  { path: 'email-edit', component: EmailEditPageComponent },
  { path: 'leaderboard', component: LeaderboardComponent },
];

