import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelsComponent } from './duels.component';

describe('DuelsComponent', () => {
  let component: DuelsComponent;
  let fixture: ComponentFixture<DuelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
