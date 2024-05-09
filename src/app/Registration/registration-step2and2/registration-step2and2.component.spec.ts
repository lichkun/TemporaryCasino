import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStep2and2Component } from './registration-step2and2.component';

describe('RegistrationStep2and2Component', () => {
  let component: RegistrationStep2and2Component;
  let fixture: ComponentFixture<RegistrationStep2and2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStep2and2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationStep2and2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
