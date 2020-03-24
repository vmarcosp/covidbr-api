import { StatesCollection, db } from '~/config/database'
import { getStatesData } from './finder'

export const findAndStoreStatesData = async (): Promise<void> => {
  const states = await getStatesData()

  StatesCollection.clear()
  StatesCollection.insert(states)
  db.saveDatabase()
}
