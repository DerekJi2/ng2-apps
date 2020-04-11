import { TestBed } from '@angular/core/testing';

import { ConfigBehaviorSubjectService } from './config-behavior-subject.service';

describe('ConfigBehaviorSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfigBehaviorSubjectService = TestBed.get(ConfigBehaviorSubjectService);
    expect(service).toBeTruthy();
  });
});
