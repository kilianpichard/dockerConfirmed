const winston = require('winston');
const DailyRotateFile = require('winston-daily-rotate-file');
const path = require('path');

const {
  format: { combine, colorize, timestamp, json },
} = winston;

const consoleTransport = new winston.transports.Console({
  format: combine(
    timestamp(),
    json()
  ),
});

const logger = winston.createLogger({
  level: 'info',
  format: combine(timestamp(), json()),
  transports: [consoleTransport], // Ajout de consoleTransport
});

logger.stream = {
  write: (message) => {
    logger.info(message);
  },
};

module.exports = logger;
