import { JsonProperty } from 'json-object-mapper';
import { MusicBrainzUrl } from './music-brainz-url';

export class MusicBrainzRelation {
  @JsonProperty({name: 'type'})
  type: string = undefined;

  @JsonProperty({name: 'url', type: MusicBrainzUrl})
  url: MusicBrainzUrl = undefined;
}
