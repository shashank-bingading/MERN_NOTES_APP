import logger from '../services/logger.js'; // Added .js extension

const logMiddleware = (req, res, next) => {
  res.on('finish', () => {
    const logMsg = `${req.method} ${req.originalUrl} ${res.statusCode}`;
    if (res.statusCode >= 400) {
      logger.error(logMsg);
    } else {
      logger.info(logMsg);
    }
  });
  next();
};

export default logMiddleware; // Changed from module.exports