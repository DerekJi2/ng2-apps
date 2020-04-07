import { TestBed } from '@angular/core/testing';

import { TetrisConfigService } from './tetris-config.service';

describe('TetrisConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TetrisConfigService = TestBed.get(TetrisConfigService);
    expect(service).toBeTruthy();
  });
});
