import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ObjectMapper } from 'json-object-mapper';
import { environment } from '../../environments/environment';
import { LastFmArtistResponse } from '../models/last-fm-artist-response';
import 'rxjs/add/operator/map';

@Injectable()
export class LastFmService {
  private API_ENDPOINT = 'https://ws.audioscrobbler.com/2.0/';
  private API_KEY = environment.lastFmApiKey;

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getArtist(id: string): Observable<LastFmArtistResponse> {
    const params = new HttpParams()
      .set('api_key', this.API_KEY)
      .set('method', 'artist.getinfo')
      .set('mbid', id)
      .set('format', 'json');

    return this.http
      .get(this.API_ENDPOINT, {params})
      .map(res => ObjectMapper.deserialize(LastFmArtistResponse, res));
  }
}
