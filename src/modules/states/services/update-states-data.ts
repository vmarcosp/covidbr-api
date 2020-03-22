import { StatesCollection, db } from '~/config/database'
import { getStatesData } from './finder'

export const findAndStoreStatesData = async (): Promise<void> => {
  const states = await getStatesData()

  StatesCollection.clear()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  StatesCollection.insert(states as unknown as any)
  db.saveDatabase()
}
