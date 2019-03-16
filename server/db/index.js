const mysql = require('mysql');
const createTables = require('./config');
const Promise = require('bluebird');
const database = 'shortly';

const connection = mysql.createConnection({
  user: 'student',
  password: 'student'
});

const db = Promise.promisifyAll(connection, { multiArgs: true });

db.connectAsync()
  .then(() => console.log(`Connected to ${database} database as ID ${db.threadId}`))
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  .then(() => createTables(db));

module.exports = db;


// hw: we have created a connection between mysql server and this file (so basically database is here)
// should have the database table "users"
//    learn says the "corresponding model to users table has been provided" -> ?
//

// model.js in models folder requires this file (and all the db folder as well)
