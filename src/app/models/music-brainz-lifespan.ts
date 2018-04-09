import { JsonProperty } from 'json-object-mapper';

export class MusicBrainzLifespan {
  @JsonProperty({name: 'begin'})
  begin: string = undefined;

  @JsonProperty({name: 'end'})
  end: string = undefined;

  @JsonProperty({name: 'ended'})
  isEnded: true = undefined;
}
