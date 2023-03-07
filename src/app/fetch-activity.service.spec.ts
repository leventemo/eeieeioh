import { TestBed } from '@angular/core/testing';

import { FetchActivityService } from './fetch-activity.service';

describe('FetchActivityService', () => {
  let service: FetchActivityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchActivityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
