import { TestBed } from '@angular/core/testing';

import { TipoContService } from './tipo-cont.service';

describe('TipoContService', () => {
  let service: TipoContService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoContService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
