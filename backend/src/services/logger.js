import { createLogger, format, transports } from 'winston';
import path from 'path';
import { fileURLToPath } from 'url';

const { combine, timestamp, errors, splat, json, colorize, simple } = format;

// In ES Modules, __dirname is not available by default, we recreate it:
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logFormat = combine(
  timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  errors({ stack: true }),
  splat(),
  json()
);

const logger = createLogger({
  level: 'info',
  format: logFormat,
  transports: [
    new transports.File({ filename: path.join(__dirname, '../../logs/combined.log') }),
    new transports.File({ filename: path.join(__dirname, '../../logs/error.log'), level: 'error' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: combine(colorize(), simple()),
  }));
}

export default logger; 