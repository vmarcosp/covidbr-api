import { fromURL, WORLD_METER_URL } from '~/common/spider'
import { BrazilCollection } from '~/config/database'

import BrazilSpider from './spider'

export const findAndStoreData = async () => {
  const { document } = await fromURL(WORLD_METER_URL)
  const brazilData = BrazilSpider.getData(document)

  BrazilCollection.clear()
  BrazilCollection.insert(brazilData)
}
