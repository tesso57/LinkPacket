import { TestBed } from '@angular/core/testing';

import { BookMarkDbService } from './book-mark-db.service';

describe('BookMarkDbService', () => {
  let service: BookMarkDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookMarkDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
