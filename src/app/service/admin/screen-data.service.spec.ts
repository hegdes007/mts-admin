import { TestBed } from '@angular/core/testing';

import { ScreenDataService } from './screen-data.service';

describe('ScreenDataService', () => {
  let service: ScreenDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScreenDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
