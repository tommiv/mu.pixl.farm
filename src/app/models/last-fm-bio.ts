import { JsonProperty } from 'json-object-mapper';

export class LastFmBio {
  @JsonProperty({name: 'published'})
  published: string = undefined;

  @JsonProperty({name: 'content'})
  content: string = undefined;
}
