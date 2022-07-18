import { TestBed } from '@angular/core/testing';

import { ApimockService } from './apimock.service';

describe('ApimockService', () => {
  let service: ApimockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApimockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
