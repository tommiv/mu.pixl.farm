import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicBrainzArtist } from '../../models/music-brainz-artist';
import { LastFmArtist } from '../../models/last-fm-artist';
import { LastFmImage } from '../../models/last-fm-image';
import { MusicBrainzService } from '../../services/music-brainz.service';
import { LastFmService } from '../../services/last-fm.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.sass']
})
export class ArtistComponent implements OnInit {
  mbapi: MusicBrainzService;
  lfapi: LastFmService;

  loading: boolean = true;
  id: string;

  mbartist: MusicBrainzArtist;
  lfartist: LastFmArtist;
  image: LastFmImage;

  constructor(mbapi: MusicBrainzService, lfapi: LastFmService, route: ActivatedRoute) {
    this.mbapi = mbapi;
    this.lfapi = lfapi;
    this.id = route.snapshot.params['id'];
  }

  ngOnInit() {
    this.mbapi.getArtist(this.id)
      .subscribe(a => {
        this.loading = false;
        this.mbartist = a;
        console.log(a);
      });

    this.lfapi.getArtist(this.id)
      .subscribe(a => {
        this.lfartist = a.artist;
        this.image = a.artist.image[a.artist.image.length - 1];
        console.log(this.lfartist);
      });
  }
}
