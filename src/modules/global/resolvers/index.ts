import { Query, Resolver } from 'type-graphql'
import { GlobalData } from '../typeDefs/GlobalData'
import GlobalSpider from '../spider'
import Spider, { WORLD_METER_URL } from '~/common/spider'

@Resolver(() => GlobalData)
export class GlobalResolver {

  @Query(() => GlobalData, { nullable: true })
  async global(): Promise<GlobalData> {
    const { document } = await Spider.fromURL(WORLD_METER_URL)
    return GlobalSpider.getData(document)
  }
}
