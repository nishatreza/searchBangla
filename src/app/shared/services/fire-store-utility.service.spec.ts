import { TestBed, inject } from '@angular/core/testing';

import { FireStoreUtilityService } from './fire-store-utility.service';

describe('FireStoreUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FireStoreUtilityService]
    });
  });

  it('should be created', inject([FireStoreUtilityService], (service: FireStoreUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
