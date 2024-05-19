import { createLogger, transports, format } from 'winston';
import Log from './log.model'; // Assuming log.model.js is in the same directory

const logger = createLogger({
  transports: [
    new transports.Console(), // Log to console
    new transports.Stream({
      stream: {
        write: (message) => {
          Log.create({
            level: 'info',
            message: message.trim(),
            timestamp: new Date()
          });
        }
      }
    }) // Log to MySQL
  ],
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf(({ timestamp, level, message }) => `${timestamp} ${level}: ${message}`)
  )
});

export default logger;