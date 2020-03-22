import { Query, Resolver } from 'type-graphql'
import { State } from '../typeDefs/Brazil'

@Resolver(() => State)
export class StateResolver {

  @Query(() => State)
  async state(): Promise<'' | null> {
    return ''
  }
}
