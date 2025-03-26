import { TestBed } from '@angular/core/testing';

import { PrestationViewService } from './prestation-view.service';

describe('PrestationViewService', () => {
  let service: PrestationViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestationViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
