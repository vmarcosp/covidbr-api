import 'reflect-metadata'
import 'module-alias/register'
import { GraphQLServer } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { CountryResolver } from '~/modules/countries/resolvers'
import { GlobalResolver } from './modules/global/resolvers'

async function run() {
  const schema = await buildSchema({
    resolvers: [CountryResolver, GlobalResolver],
    emitSchemaFile: true
  })

  const server = new GraphQLServer({ schema, })

  server.start(() => console.log('Server is running'))
}

run()
