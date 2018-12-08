import { TestBed } from '@angular/core/testing';

import { HomeSvcService } from './home-svc.service';

describe('HomeSvcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeSvcService = TestBed.get(HomeSvcService);
    expect(service).toBeTruthy();
  });
});
