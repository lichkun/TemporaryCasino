import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneEditPageComponent } from './phone-edit-page.component';

describe('PhoneEditPageComponent', () => {
  let component: PhoneEditPageComponent;
  let fixture: ComponentFixture<PhoneEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhoneEditPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhoneEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
