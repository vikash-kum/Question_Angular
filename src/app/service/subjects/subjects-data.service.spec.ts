import { TestBed } from '@angular/core/testing';

import { SubjectsDataService } from './subjects-data.service';

describe('SubjectsDataService', () => {
  let service: SubjectsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
