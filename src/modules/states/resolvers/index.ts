import { Query, Resolver, Arg } from 'type-graphql'
import { State } from '../typeDefs/State'
import { StatesCollection } from '../../../config/database'
import { StateFilterInput } from '../typeDefs/StateFilterInput'

@Resolver(() => State)
export class StateResolver {
  @Query(() => State, { nullable: true })
  async state(@Arg('filter') filter?: StateFilterInput): Promise<State | null> {
    const query = filter ? { uf: filter.uf } : {}
    return StatesCollection.findOne(query)
  }

  @Query(() => [State], { nullable: true })
  async states(): Promise<State[]> {
    return StatesCollection.find({})
  }
}
