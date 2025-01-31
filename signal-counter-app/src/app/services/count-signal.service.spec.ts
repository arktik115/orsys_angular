import { TestBed } from '@angular/core/testing';

import { CountSignalService } from './count-signal.service';

describe('CountSignalService', () => {
  let service: CountSignalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountSignalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
