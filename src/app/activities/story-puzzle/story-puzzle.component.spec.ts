import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryPuzzleComponent } from './story-puzzle.component';

describe('StoryPuzzleComponent', () => {
  let component: StoryPuzzleComponent;
  let fixture: ComponentFixture<StoryPuzzleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryPuzzleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryPuzzleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
