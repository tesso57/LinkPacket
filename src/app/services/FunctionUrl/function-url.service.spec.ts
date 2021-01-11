import { TestBed } from '@angular/core/testing';

import { FunctionUrlService } from './function-url.service';

describe('FunctionUrlService', () => {
  let service: FunctionUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
