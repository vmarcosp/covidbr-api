import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class State {
  @Field()
  uf: string

  @Field()
  name: string

  @Field()
  latitude: number

  @Field()
  longitude: number

  @Field()
  cases: number

  @Field()
  casesMS: number

  @Field()
  casesNotConfirmedByMS: number

  @Field()
  deaths: number
}
