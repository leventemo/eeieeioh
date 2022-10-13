import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersGuideComponent } from './teachers-guide.component';

describe('TeachersGuideComponent', () => {
  let component: TeachersGuideComponent;
  let fixture: ComponentFixture<TeachersGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
