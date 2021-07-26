import { TestBed } from '@angular/core/testing';

import { ToppingServiceService } from './topping-service.service';

describe('ToppingServiceService', () => {
  let service: ToppingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToppingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
