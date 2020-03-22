import { CronJob } from 'cron'
import { logger } from '~/common/logger'

import { findAndStoreData } from './service'

async function runJob () {
  logger.info('Buscando dados globais')
  await findAndStoreData()
  logger.info('Dados globais armazenados com sucesso')
}

const cronjob = new CronJob('0 */10 * * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
