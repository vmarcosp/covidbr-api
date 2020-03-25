import { db } from '~/config/database'
import { City } from './typeDefs/City'

export const CitiesCollection = db.addCollection<City>('cities')
