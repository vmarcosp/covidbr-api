import Loki from 'lokijs'
import { GlobalData } from '~/modules/global/typeDefs/GlobalData'
import { Brazil } from '~/modules/brazil/typeDefs/Brazil'
import { State } from '../modules/states/typeDefs/State'

export const db = new Loki('cache.json')

export const GlobalCollection = db.addCollection<GlobalData>('global')

export const BrazilCollection = db.addCollection<Brazil>('brazil')

export const StatesCollection = db.addCollection<State>('states')
