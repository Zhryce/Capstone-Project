const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    const db = config.get('db');
    mongoose.connect(db)
        .then(() => {
            console.log(`Connected to ${db}...`);
            winston.info(`Connected to ${db}...`);
        })
        .catch(() => console.error(`Could not connect to ${db}...`));
}