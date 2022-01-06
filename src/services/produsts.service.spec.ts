import { TestBed } from '@angular/core/testing';

import { ProdustsService } from './produsts.service';

describe('ProdustsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProdustsService = TestBed.get(ProdustsService);
    expect(service).toBeTruthy();
  });
});
