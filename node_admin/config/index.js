'use strict'

const motionless = require('./static.js');
const http = require('./http.js');

module.exports = {
  ...http,
  ...motionless
}