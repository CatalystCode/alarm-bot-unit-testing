/*
 * Please refer to the dev.sample.json file.
 * Copy this file and create a new file named "dev.private.json".
 * Fill in the details for the features you'de like to support.
 * You don't have to fill in all settings, but leave those you're not using blank.
*/

var nconf = require('nconf');
var path = require('path');

var envFile = null;
var sampleFile = path.join(__dirname, 'dev.sample.json');
if (process.env.NODE_ENV == 'test') {
  envFile = path.join(__dirname, 'test.config.json');
} else {
  envFile = path.join(__dirname, 'dev.private.json');
}

var config = nconf.env().file({ file: sampleFile }).file({ file: envFile });

module.exports = config;