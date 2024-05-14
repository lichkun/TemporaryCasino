import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadertableComponent } from './leadertable.component';

describe('LeadertableComponent', () => {
  let component: LeadertableComponent;
  let fixture: ComponentFixture<LeadertableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeadertableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeadertableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
