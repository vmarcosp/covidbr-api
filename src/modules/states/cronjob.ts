import { CronJob } from 'cron'
import { logger } from '~/common/logger'
import { findAndStoreStatesData } from './services/update-states-data'

async function runJob () {
  logger.info('Buscando dados estaduais')
  await findAndStoreStatesData()
  logger.info('Dados estaduais armazenados com sucesso')
}

const cronjob = new CronJob('0 */10 * * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
