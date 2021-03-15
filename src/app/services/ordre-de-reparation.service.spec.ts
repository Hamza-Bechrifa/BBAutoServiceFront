import { TestBed } from '@angular/core/testing';

import { OrdreDeReparationService } from './ordre-de-reparation.service';

describe('OrdreDeReparationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdreDeReparationService = TestBed.get(OrdreDeReparationService);
    expect(service).toBeTruthy();
  });
});
