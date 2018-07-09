import { TestBed, inject } from '@angular/core/testing';

import { VaultDataService } from './vault-data.service';

describe('VaultDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VaultDataService]
    });
  });

  it('should be created', inject([VaultDataService], (service: VaultDataService) => {
    expect(service).toBeTruthy();
  }));
});
