import 'reflect-metadata'
import './config-aliases'
import { GraphQLServer } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { GlobalResolver } from './modules/global/resolvers'
import { BrazilResolver } from './modules/brazil/resolvers'
import globalCralwerJob from './modules/global/cronjob'
import brazilCrawlerJob from './modules/brazil/cronjob'

async function run() {
  await globalCralwerJob.start()
  await brazilCrawlerJob.start()

  const schema = await buildSchema({
    resolvers: [GlobalResolver, BrazilResolver],
    emitSchemaFile: true
  })

  const server = new GraphQLServer({ schema, })

  server.start(() => console.log('Server is running'))
}

run()
