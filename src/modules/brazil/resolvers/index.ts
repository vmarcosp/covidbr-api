import { Query, Resolver } from 'type-graphql'
import { Brazil } from '~/modules/brazil/typeDefs/Brazil'
import { BrazilCollection } from '~/config/database'

@Resolver(() => Brazil)
export class BrazilResolver {

  @Query(() => Brazil, { nullable: true })
  async brazil(): Promise<Brazil | null> {
    return BrazilCollection.findOne()
  }
}
