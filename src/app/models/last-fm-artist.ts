import { JsonProperty } from 'json-object-mapper';
import { LastFmImage } from './last-fm-image';
import { LastFmStats } from './last-fm-stats';
import { LastFmBio } from './last-fm-bio';

export class LastFmArtist {
  @JsonProperty({name: 'name'})
  name: string = undefined;

  @JsonProperty({name: 'url'})
  url: string = undefined;

  @JsonProperty({name: 'image', type: LastFmImage})
  image: LastFmImage[] = [];

  @JsonProperty({name: 'stats'})
  stats: LastFmStats = undefined;

  @JsonProperty({name: 'bio'})
  bio: LastFmBio = undefined;
}
