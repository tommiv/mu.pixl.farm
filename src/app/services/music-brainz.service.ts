import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectMapper } from 'json-object-mapper';
import { MusicBrainzArtist } from '../models/music-brainz-artist';
import 'rxjs/add/operator/map';

@Injectable()
export class MusicBrainzService {
  private API_ENDPOINT = 'https://musicbrainz.org/ws/2';

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getArtist(id: string): Observable<MusicBrainzArtist> {
    const params = new HttpParams()
      .set('inc', 'aliases url-rels')
      .set('fmt', 'json');

    return this.http
      .get(`${this.API_ENDPOINT}/artist/${id}`, {params})
      .map(res => ObjectMapper.deserialize(MusicBrainzArtist, res));
  }
}
