import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class Brazil {
  @Field()
  totalDeaths: number

  @Field()
  totalCases: number

  @Field()
  activeCases: number

  @Field()
  totalRecovered: number

  @Field()
  closedCases: number
}
