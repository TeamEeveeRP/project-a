const { Pool } = require('pg');

const PG_URI = 'postgres://ybcmbrwn:yWy8WY4Tjh-5kWEQPKaW7BCiwQVAxQO0@kashin.db.elephantsql.com/ybcmbrwn';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('QUERY EXECUTED: ', text);
    return pool.query(text, params, callback);
  }
};