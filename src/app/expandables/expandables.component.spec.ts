import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandablesComponent } from './expandables.component';

describe('ExpandablesComponent', () => {
  let component: ExpandablesComponent;
  let fixture: ComponentFixture<ExpandablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
