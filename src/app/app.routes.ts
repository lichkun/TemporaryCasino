import { MainComponent } from './main/main.component';
<<<<<<< Updated upstream
import { RegistrationStep1Component } from './registration-step1/registration-step1.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registration', component: RegistrationStep1Component }
=======
import { RegistrationStep1Component } from './Registration/registration-step1/registration-step1.component';
import { LoginPageComponent } from './Account/login-page/login-page.component';
import { UserProfileComponent } from './Account/user-profile/user-profile.component';
import { DepositPageComponent } from './Deposit/deposit-page/deposit-page.component';
import { RegistrationStep2Component } from './Registration/registration-step2/registration-step2.component';
import { RegistrationStep2and2Component } from './Registration/registration-step2and2/registration-step2and2.component';
import { RegistrationStep3Component } from './Registration/registration-step3/registration-step3.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'registration', component: RegistrationStep1Component },
  { path: 'registration2', component: RegistrationStep2Component },
  { path: 'registration2and2', component: RegistrationStep2and2Component },
  { path: 'registration3', component: RegistrationStep3Component },
  { path: 'login', component: LoginPageComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'deposit', component: DepositPageComponent }
>>>>>>> Stashed changes
];

