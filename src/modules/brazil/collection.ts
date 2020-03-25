import { db } from '~/config/database'
import { Brazil } from './typeDefs/Brazil'

export const BrazilCollection = db.addCollection<Brazil>('brazil')
