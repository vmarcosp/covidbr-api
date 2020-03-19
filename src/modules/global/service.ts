import { fromURL, WORLD_METER_URL } from "~/common/spider"
import GlobalSpider from './spider'
import { GlobalCollection, db } from "~/config/database"

export const findAndStoreData = async () => {
  const { document } = await fromURL(WORLD_METER_URL)
  const globalData = GlobalSpider.getData(document)
  GlobalCollection.clear()
  GlobalCollection.insert(globalData)

  db.saveDatabase()
}
