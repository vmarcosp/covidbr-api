import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class City {
  @Field()
  uf: string

  @Field()
  name: string

  @Field()
  cases: number

  @Field()
  casesMS: number

  @Field()
  casesNotConfirmedByMS: number

  @Field()
  deaths: number
}
