var mysql = require('mysql');

var config = {
  name: 'rest-api',
  hostname : 'http://localhost',
  apiPath: '/api',
  version: '0.0.1',
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    get: mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : '',
      database : 'test1'
    })
  }
};

module.exports = config;
