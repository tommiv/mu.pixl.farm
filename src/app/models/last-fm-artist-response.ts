import { JsonProperty } from 'json-object-mapper';
import { LastFmArtist } from './last-fm-artist';

export class LastFmArtistResponse {
  @JsonProperty({name: 'artist', type: LastFmArtist})
  artist: LastFmArtist = undefined;
}
