import { TestBed } from '@angular/core/testing';

import { DevisClientService } from './devis-client.service';

describe('DevisClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DevisClientService = TestBed.get(DevisClientService);
    expect(service).toBeTruthy();
  });
});
