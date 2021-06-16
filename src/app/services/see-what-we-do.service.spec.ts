import { TestBed } from '@angular/core/testing';

import { SeeWhatWeDoService } from './see-what-we-do.service';

describe('SeeWhatWeDoService', () => {
  let service: SeeWhatWeDoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeeWhatWeDoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
