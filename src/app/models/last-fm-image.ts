import { JsonProperty } from 'json-object-mapper';

export class LastFmImage {
  @JsonProperty({name: '#text'})
  url: string = undefined;

  @JsonProperty({name: 'size'})
  size: string = undefined;
}
