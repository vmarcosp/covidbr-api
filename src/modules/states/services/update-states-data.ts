import { StatesCollection, db } from '~/config/database'
import { getStatesData } from './finder'
import { logger } from '~/common/logger'

export const findAndStoreData = async () => {
  logger.info('Buscando dados estaduais')
  const states = await getStatesData()

  StatesCollection.clear()
  StatesCollection.insert(states)
  db.saveDatabase()
  logger.info('Dados estaduais armazenados com sucesso')
}
