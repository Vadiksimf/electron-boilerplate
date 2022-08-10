const winston = require('winston');

const { format, transports } = winston;
const { combine } = winston.format;

const alignColorsAndTime = combine(
  winston.format.colorize({
    all: true,
  }),
  winston.format.timestamp({
    format: 'YY-MM-DD HH:mm:ss',
  }),
  winston.format.printf(
    (info: any) =>
      `[${info.label}]  [${info.timestamp}] \n${info.level} : \n${info.message}`
  )
);

const logger = winston.createLogger({
  level: 'info',
  format: combine(format.colorize(), alignColorsAndTime),
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    // new winston.transports.File({ filename: 'error.log', level: 'error' }),
    // new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      // Uncomment this to use default logging
      // format: format.simple(),
    })
  );
}

export default logger;
