import { TestBed } from '@angular/core/testing';

import { BackEndApiService } from './back-end-api.service';

describe('BackEndApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BackEndApiService = TestBed.get(BackEndApiService);
    expect(service).toBeTruthy();
  });
});
