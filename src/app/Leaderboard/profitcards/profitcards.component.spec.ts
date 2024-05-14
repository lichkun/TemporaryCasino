import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitcardsComponent } from './profitcards.component';

describe('ProfitcardsComponent', () => {
  let component: ProfitcardsComponent;
  let fixture: ComponentFixture<ProfitcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfitcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfitcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
