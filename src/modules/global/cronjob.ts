import { CronJob } from 'cron'
import { findAndStoreData } from './service'

async function runJob() {
  console.log('Running global crawler')
  await findAndStoreData()
  console.log('Success')
}

const cronjob = new CronJob('0 */2 * * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
