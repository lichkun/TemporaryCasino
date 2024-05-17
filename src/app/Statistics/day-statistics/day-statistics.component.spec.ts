import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayStatisticsComponent } from './day-statistics.component';

describe('DayStatisticsComponent', () => {
  let component: DayStatisticsComponent;
  let fixture: ComponentFixture<DayStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayStatisticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
