const { Pool, Client } = require('pg');
const connectionString = `postgresql://postgres:jgspNO5iEBrZdzseAea7@database-1.c9qrogir5qab.ap-southeast-1.rds.amazonaws.com:5432/devera`
const client = new Client({
  connectionString,
})
client.connect();
console.log(client)
module.exports = client
