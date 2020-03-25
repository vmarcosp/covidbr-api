import { Query, Resolver, Arg } from 'type-graphql'
import { fromNullable } from 'fp-ts/lib/Option'

import { State } from '../typeDefs/State'
import { StateFilterInput } from '../typeDefs/StateFilterInput'
import { findStates } from '../services/queries'

@Resolver(() => State)
export class StateResolver {
  @Query(() => [State], { nullable: true })
  async states (@Arg('filter', { nullable: true }) filter?: StateFilterInput): Promise<State[]> {
    return findStates(fromNullable(filter))
  }
}
