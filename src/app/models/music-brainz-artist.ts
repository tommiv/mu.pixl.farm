import { JsonProperty } from 'json-object-mapper';
import { MusicBrainzLifespan } from './music-brainz-lifespan';
import { MusicBrainzRelation } from './music-brainz-relation';

export class MusicBrainzArtist {
  @JsonProperty({name: 'id'})
  id: string = undefined;

  @JsonProperty({name: 'type-id'})
  typeID: string = undefined;

  @JsonProperty({name: 'name'})
  name: string = undefined;

  @JsonProperty({name: 'country'})
  country: string = undefined;

  @JsonProperty({name: 'disambiguation'})
  disambiguation: string = undefined;

  @JsonProperty({name: 'life-span'})
  lifespan: MusicBrainzLifespan = undefined;

  @JsonProperty({name: 'relations', type: MusicBrainzRelation})
  relations: MusicBrainzRelation[] = [];
}
