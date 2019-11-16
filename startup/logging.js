const winston =  require('winston');
require('winston-mongodb');
require('express-async-errors');

module.exports = function () {
    winston.handledException(
    new winston.transports.File({filename: 'uncoughtException.log'}));

    process.on('unhandledException', (ex) => {
    throw ex;
    });

    winston.add(winston.transports.File, { filename: 'logfile.log' });
    winston.add(winston.transports.MongoDB, { db: 'mongodb://localhost/vidly',
    level: 'info'});

    
}