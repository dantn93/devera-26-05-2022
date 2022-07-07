const { Pool, Client } = require('pg');
const connectionString = `
postgresql://username:password@
192.168.11.68:5432/default_database`
const client = new Client({
  connectionString,
})
client.connect();
module.exports = client
