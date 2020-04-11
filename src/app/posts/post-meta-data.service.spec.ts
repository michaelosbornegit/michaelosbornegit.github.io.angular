import { TestBed } from '@angular/core/testing';

import { PostMetaDataService } from './post-meta-data.service';

describe('PostMetaDataService', () => {
  let service: PostMetaDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostMetaDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
