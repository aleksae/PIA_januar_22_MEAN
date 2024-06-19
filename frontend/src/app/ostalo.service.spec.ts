import { TestBed } from '@angular/core/testing';

import { OstaloService } from './ostalo.service';

describe('OstaloService', () => {
  let service: OstaloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OstaloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
