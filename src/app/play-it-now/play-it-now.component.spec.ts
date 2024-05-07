import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayItNowComponent } from './play-it-now.component';

describe('PlayItNowComponent', () => {
  let component: PlayItNowComponent;
  let fixture: ComponentFixture<PlayItNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayItNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayItNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
