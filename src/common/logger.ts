import { createLogger, transports, format } from 'winston'

const customFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(info => `${info.timestamp} [${info.level}]: ${info.message}`)
)

export const logger = createLogger({
  level: 'debug',
  format: customFormat,
  transports: [
    new transports.Console({})
  ]
})
