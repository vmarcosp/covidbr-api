import { Query, Resolver } from 'type-graphql'
import { GlobalData } from '../typeDefs/GlobalData'
import { GlobalCollection } from '../collection'

@Resolver(() => GlobalData)
export class GlobalResolver {
  @Query(() => GlobalData, { nullable: true })
  async global (): Promise<GlobalData | null> {
    return GlobalCollection.findOne()
  }
}
