import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewordComponent } from './reword.component';

describe('RewordComponent', () => {
  let component: RewordComponent;
  let fixture: ComponentFixture<RewordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
