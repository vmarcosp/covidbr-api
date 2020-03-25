import { db } from '~/config/database'
import { State } from './typeDefs/State'

export const StatesCollection = db.addCollection<State>('states')
