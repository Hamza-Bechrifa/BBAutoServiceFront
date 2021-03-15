import { TestBed } from '@angular/core/testing';

import { BonDeReceptionService } from './bon-de-reception.service';

describe('BonDeReceptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BonDeReceptionService = TestBed.get(BonDeReceptionService);
    expect(service).toBeTruthy();
  });
});
