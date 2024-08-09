const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
    connectionString:  `postgresql://${process.env.DATABASE_USER}:${process.env.DATABASE_PWD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`
})

module.exports = {
    pool
}