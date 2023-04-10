import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbreviationsComponent } from './abbreviations.component';

describe('AbbreviationsComponent', () => {
  let component: AbbreviationsComponent;
  let fixture: ComponentFixture<AbbreviationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbreviationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbreviationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
