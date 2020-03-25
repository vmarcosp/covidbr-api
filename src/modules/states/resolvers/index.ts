import { Query, Resolver, Arg } from 'type-graphql'
import { fromNullable } from 'fp-ts/lib/Option'

import { StateFilterInput } from '../typeDefs/StateFilterInput'
import { PaginationInput } from '~/common/pagination'
import { State } from '../typeDefs/State'
import { findStates, findState } from '../services/queries'

@Resolver(() => State)
export class StateResolver {
  @Query(() => [State], { nullable: true })
  async states (
    @Arg('filter', { nullable: true }) filter?: StateFilterInput,
    @Arg('pagination', { nullable: true }) pagination?: PaginationInput): Promise<State[] | null> {
    return findStates(fromNullable(filter), fromNullable(pagination))
  }

  @Query(() => State, { nullable: true })
  async state (@Arg('filter', { nullable: true }) filter?: StateFilterInput): Promise<State | null> {
    return findState(fromNullable(filter))
  }
}
