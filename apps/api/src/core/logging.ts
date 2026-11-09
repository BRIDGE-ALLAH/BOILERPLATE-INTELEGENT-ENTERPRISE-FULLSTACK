// @api - Centralized logging configuration using Winston
import winston from 'winston';
import 'winston-daily-rotate-file';

// Define log format
const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

// Winston logger instance
export const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  format: logFormat,
  defaultMeta: {
    service: 'moonwitness-api',
    version: '1.0.0',
  },
  transports: [
    // Write to console in all environments
    new winston.transports.Console(),

    // Write to file (production only)
    ...(process.env.NODE_ENV !== 'development'
      ? [
          new winston.transports.File({
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            maxFiles: '14d', // Keep 14 days of logs
            zippedArchive: true,
          }),
        ]
      : []),

    // Daily rotate file for application logs
    new winston.transports.DailyRotateFile({
      filename: 'logs/%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '30d',
      zippedArchive: true,
    }),
  ],
});

// Request correlation ID middleware
export function correlationIdMiddleware() {
  return async (req: any, rep: any, next: any) => {
    const correlationId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    req.correlationId = correlationId;

    // Add correlation ID to logger metadata
    logger.info({
      correlationId,
      request: {
        method: req.method,
        url: req.url,
        ip: req.ip,
      },
    }, 'Incoming request');

    // Hook into response to log outgoing
    rep.on('finish', () => {
      logger.info({
        correlationId,
        request: {
          method: req.method,
          url: req.url,
          status: rep.statusCode,
        },
      }, 'Request completed');
    });

    next();
  };
}

// Error logging helper
export function error(error: Error, context?: string) {
  logger.error(
    {
      error: {
        name: error.name,
        message: error.message,
        stack: error.stack,
      },
      context,
    },
    'Application error'
  );
}

// Performance monitoring helper
export function performance(start: number, operation: string, context?: any) {
  const duration = Date.now() - start;
  logger.info(
    {
      operation,
      durationMs: duration,
      ...context,
    },
    `${operation} completed in ${duration}ms`
  );
}

export default logger;