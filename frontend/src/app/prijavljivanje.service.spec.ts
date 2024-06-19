import { TestBed } from '@angular/core/testing';

import { PrijavljivanjeService } from './prijavljivanje.service';

describe('PrijavljivanjeService', () => {
  let service: PrijavljivanjeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrijavljivanjeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
