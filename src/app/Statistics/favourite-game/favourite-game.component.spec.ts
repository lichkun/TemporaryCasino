import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteGameComponent } from './favourite-game.component';

describe('FavouriteGameComponent', () => {
  let component: FavouriteGameComponent;
  let fixture: ComponentFixture<FavouriteGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavouriteGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavouriteGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
