const { password } = require('./.env')

module.exports = {
  client: 'mysql',
  connection: {
    host: '192.168.0.109',
    database: 'graphql',
    user: 'root',
    password
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
