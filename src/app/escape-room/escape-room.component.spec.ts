import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscapeRoomComponent } from './escape-room.component';

describe('EscapeRoomComponent', () => {
  let component: EscapeRoomComponent;
  let fixture: ComponentFixture<EscapeRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscapeRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EscapeRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
