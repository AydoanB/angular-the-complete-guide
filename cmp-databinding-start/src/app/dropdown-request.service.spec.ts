import { TestBed } from '@angular/core/testing';

import { DropdownRequestService } from './dropdown-request.service';

describe('DropdownRequestService', () => {
  let service: DropdownRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DropdownRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
