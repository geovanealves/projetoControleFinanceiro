import { TestBed } from '@angular/core/testing';

import { ListFinancesService } from './list-finances.service';

describe('ListFinancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListFinancesService = TestBed.get(ListFinancesService);
    expect(service).toBeTruthy();
  });
});
