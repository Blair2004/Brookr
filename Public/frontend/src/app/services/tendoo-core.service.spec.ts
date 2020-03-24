import { TestBed } from '@angular/core/testing';

import { TendooCoreService } from './tendoo-core.service';

describe('TendooCoreService', () => {
  let service: TendooCoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TendooCoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
