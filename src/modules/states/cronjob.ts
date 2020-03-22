import { CronJob } from 'cron'
import { logger } from '~/common/logger'
import { findAndStoreData } from './service'

async function runJob() {
  logger.info('Buscando informarções do Brasil')
  await findAndStoreData()
  logger.info('Informações do Brasil armazenadas com sucesso')
}

const cronjob = new CronJob('0 */10 * * * *', runJob)

export const start = async () => {
  await runJob()

  cronjob.start()
}

export default { start }
