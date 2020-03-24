import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class GlobalData {
  @Field()
  totalCases: number

  @Field()
  totalDeaths: number

  @Field()
  totalRecovered: number

  @Field()
  activeCases: number

  @Field()
  closedCases: number
}
