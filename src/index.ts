import 'reflect-metadata'
import './config-aliases'
import { GraphQLServer } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { GlobalResolver } from './modules/global/resolvers'
import { BrazilResolver } from './modules/brazil/resolvers'
import { StateResolver } from './modules/states/resolvers'
import globalCralwerJob from './modules/global/cronjob'
import brazilCrawlerJob from './modules/brazil/cronjob'
import statesCrawlerJob from './modules/states/cronjob'

async function run() {
  await globalCralwerJob.start()
  await brazilCrawlerJob.start()
  await statesCrawlerJob.start()

  const schema = await buildSchema({
    resolvers: [GlobalResolver, BrazilResolver, StateResolver],
    emitSchemaFile: true,
    validate: false
  })

  const server = new GraphQLServer({ schema })

  server.start(() => console.log('Server is running at http://localhost:4000/'))
}

run()
