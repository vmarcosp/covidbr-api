import 'reflect-metadata'
import './config-aliases'
import { GraphQLServer } from 'graphql-yoga'
import { buildSchema } from 'type-graphql'
import { GlobalResolver } from './modules/global/resolvers'
import crawlerJob from './modules/global/cronjob'

async function run() {
  await crawlerJob.start()

  const schema = await buildSchema({
    resolvers: [GlobalResolver],
    emitSchemaFile: true
  })

  const server = new GraphQLServer({ schema, })

  server.start(() => console.log('Server is running'))
}

run()
