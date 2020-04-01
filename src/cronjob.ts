import { CronJob } from 'cron'
import { findAndStoreData as handleBrazilCrawler } from './modules/brazil/service'
import { findAndStoreData as handleGlobalCrawler } from './modules/global/service'
import { findAndStoreCities as handleCitiesDataFinder } from './modules/cities/services/data-finder'
import { findAndStoreData as handleStatesDataFinder } from './modules/states/services/update-states-data'

const runJob = () => Promise.all([
  handleGlobalCrawler(),
  handleBrazilCrawler(),
  handleStatesDataFinder(),
  handleCitiesDataFinder()
])

const cronjob = new CronJob('0 * * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
