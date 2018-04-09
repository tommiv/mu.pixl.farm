import { JsonProperty } from 'json-object-mapper';

export class LastFmStats {
  @JsonProperty({name: 'listeners'})
  listeners: string = undefined;

  @JsonProperty({name: 'playcount'})
  playcount: string = undefined;
}
