import { JsonProperty } from 'json-object-mapper';

export class MusicBrainzUrl {
  @JsonProperty({name: 'id'})
  id: string = undefined;

  @JsonProperty({name: 'resource'})
  resource: string = undefined;
}
