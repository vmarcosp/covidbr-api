import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class State {
  @Field()
  uf: string

  @Field()
  name: string;

  @Field()
  totalCases: number;

  @Field()
  totalCasesMS: number

  @Field()
  totalDeaths: number;
}
