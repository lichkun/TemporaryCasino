import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  userData: any = {};

  constructor() { }

  setUserData(data: any): void {
    this.userData = { ...this.userData, ...data };
  }

  getUserData(): any {
    return this.userData;
  }
}
