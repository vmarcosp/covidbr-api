import { fromURL, WORLD_METER_URL } from '~/common/spider'
import GlobalSpider from './crawler'
import { GlobalCollection } from '~/config/database'
import { logger } from '~/common/logger'

export const findAndStoreData = async () => {
  logger.info('Buscando dados globais')
  const { document } = await fromURL(WORLD_METER_URL)
  const globalData = GlobalSpider.getData(document)

  GlobalCollection.clear()
  GlobalCollection.insert(globalData)
  logger.info('Dados globais armazenados com sucesso')
}
