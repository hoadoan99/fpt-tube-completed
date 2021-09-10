import { TestBed } from '@angular/core/testing';

import { TubeService } from './tube.service';

describe('TubeService', () => {
  let service: TubeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TubeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
