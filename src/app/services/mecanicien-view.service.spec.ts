import { TestBed } from '@angular/core/testing';

import { MecanicienViewService } from './mecanicien-view.service';

describe('MecanicienViewService', () => {
  let service: MecanicienViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MecanicienViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  }); 
});
