import 'dotenv/config'
import 'reflect-metadata'
import './config-aliases'
import { GraphQLServer } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { GlobalResolver } from './modules/global/resolvers'
import { BrazilResolver } from './modules/brazil/resolvers'
import { StateResolver } from './modules/states/resolvers'
import { CityResolver } from './modules/cities/resolvers'
import cralwerJob from './cronjob'

async function run () {
  await cralwerJob.start()

  const schema = await buildSchema({
    resolvers: [GlobalResolver, BrazilResolver, StateResolver, CityResolver],
    emitSchemaFile: true,
    validate: false
  })

  const server = new GraphQLServer({ schema })

  const port = process.env.PORT || 4000
  server.start(
    { port },
    () => console.log(`Server is running at http://localhost:${port}`)
  )
}

run()
