const { Client } = require('pg');

const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  database: 'strings',
  password: '',
  port: 5432,
});


client.connect()
  .then(() => console.log('DB connected'))
  .catch(err => console.error('DB connection error', err.stack));


  // Query for fetching all strings from database
const getAllStrings = () => new Promise((resolve, reject) => {
  const query = 'SELECT * FROM Strings;';
  client.query(query)
    .then(res => {
      console.log('fetched all strings');
      resolve(res.rows);
    })
    .catch(err => {
      console.error(err.stack);
      reject(err);
    });
});

  // Query for inserting a new string to database
  const saveNewString = string => new Promise((resolve, reject) => {
    const query = 'INSERT INTO Strings (string) VALUES ($1);';
    const values = [string];
    client.query(query, values)
      .then(res => {
        console.log('Saved a new string');
        resolve(res);
      })
      .catch(err => {
        console.error(err.stack);
        reject(err);
      });
  });

  // saveNewString('Mo is a cat lover');

  module.exports = {
    getAllStrings,
    saveNewString
  }