import { TestBed, inject } from '@angular/core/testing';

import { MusicBrainzService } from './music-brainz.service';

describe('MusicBrainzService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MusicBrainzService]
    });
  });

  it('should be created', inject([MusicBrainzService], (service: MusicBrainzService) => {
    expect(service).toBeTruthy();
  }));
});
