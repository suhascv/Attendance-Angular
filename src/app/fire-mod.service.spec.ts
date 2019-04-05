import { TestBed } from '@angular/core/testing';

import { FireModService } from './fire-mod.service';

describe('FireModService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FireModService = TestBed.get(FireModService);
    expect(service).toBeTruthy();
  });
});
