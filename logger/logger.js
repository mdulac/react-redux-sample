const winston = require('winston');
const conf = require('../conf/conf');

var logger = new winston.Logger({
    level: conf.application.log.level,
    transports: [
        new (winston.transports.Console)(),
        new (winston.transports.File)(
            {
                name: 'logger',
                filename: 'logs/server.log'
            }
        )
    ]
});

logger.exitOnError = false;

module.exports = logger;