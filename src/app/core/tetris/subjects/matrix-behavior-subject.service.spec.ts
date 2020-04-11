import { TestBed } from '@angular/core/testing';

import { MatrixBehaviorSubjectService } from './matrix-behavior-subject.service';

describe('MatrixBehaviorSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatrixBehaviorSubjectService = TestBed.get(MatrixBehaviorSubjectService);
    expect(service).toBeTruthy();
  });
});
