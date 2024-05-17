import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthStatisticComponent } from './month-statistic.component';

describe('MonthStatisticComponent', () => {
  let component: MonthStatisticComponent;
  let fixture: ComponentFixture<MonthStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonthStatisticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonthStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
