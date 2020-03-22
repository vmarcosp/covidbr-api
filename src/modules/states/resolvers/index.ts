import { Query, Resolver, Arg } from 'type-graphql'
import { State } from '../typeDefs/State'
import { StatesCollection } from '../../../config/database'
import { StateFilterInput } from '../typeDefs/StateFilterInput'

@Resolver(() => State)
export class StateResolver {
  @Query(() => State, { nullable: true })
  async state (@Arg('filter') filter: StateFilterInput): Promise<State | null> {
    return StatesCollection.findOne({ uf: filter.uf })
  }

  @Query(() => [State], { nullable: true })
  async states (@Arg('filter') filter: StateFilterInput): Promise<State[]> {
    return StatesCollection.find({}).filter(({ name }) => name.includes(filter.name || ''))
  }
}
