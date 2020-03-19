import { Query, Resolver } from 'type-graphql'
import { Country } from '~/modules/countries/typeDefs/Country'

@Resolver(() => Country)
export class CountryResolver {

  @Query(() => [Country], { nullable: true })
  async countries(): Promise<Country[]> {
    return [{ name: 'Brazil' }]
  }
}
