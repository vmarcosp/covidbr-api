import { CronJob } from 'cron'
import { findAndStoreData as handleBrazilData } from './modules/brazil/service'
import { findAndStoreData as handleGlobalData } from './modules/global/service'
import { findAndStoreData as handleStatesData } from './modules/states/services/update-states-data'

const runJob = () => Promise.all([
  handleGlobalData(),
  handleBrazilData(),
  handleStatesData()
])

const cronjob = new CronJob('0 0 */1 * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
