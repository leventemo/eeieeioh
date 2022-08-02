import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimedCardsComponent } from './timed-cards.component';

describe('TimedCardsComponent', () => {
  let component: TimedCardsComponent;
  let fixture: ComponentFixture<TimedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimedCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
