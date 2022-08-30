import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogBoardGameComponent } from './dialog-board-game.component';

describe('DialogBoardGameComponent', () => {
  let component: DialogBoardGameComponent;
  let fixture: ComponentFixture<DialogBoardGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogBoardGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
