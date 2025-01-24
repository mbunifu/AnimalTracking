import { TestBed } from '@angular/core/testing';

import { GeotrackingService } from './geotracking.service';

describe('GeotrackingService', () => {
  let service: GeotrackingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeotrackingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
