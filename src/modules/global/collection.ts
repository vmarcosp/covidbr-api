import { db } from '~/config/database'
import { GlobalData } from '../global/typeDefs/GlobalData'

export const GlobalCollection = db.addCollection<GlobalData>('global')
