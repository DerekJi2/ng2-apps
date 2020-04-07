import { TestBed } from '@angular/core/testing';

import { SquareMatrixService } from './square-matrix.service';

describe('SquareMatrixService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SquareMatrixService = TestBed.get(SquareMatrixService);
    expect(service).toBeTruthy();
  });
});
