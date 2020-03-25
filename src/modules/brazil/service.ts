import { logger } from '~/common/logger'
import { fromURL, WORLD_METER_URL } from '~/common/spider'

import BrazilSpider from './crawler'
import { BrazilCollection } from './collection'
import { db } from '~/config/database'

export const findAndStoreData = async () => {
  logger.info('Buscando dados nacionas')
  const { document } = await fromURL(WORLD_METER_URL)
  const brazilData = BrazilSpider.getData(document)

  BrazilCollection.clear()
  BrazilCollection.insert(brazilData)
  db.saveDatabase()

  logger.info('Dados nacionais armazenados com sucesso')
}
