const pg = require('pg');

const Pool = pg.Pool;

const pool = new Pool({
    database: 'weekend-react-gallery',
    host: 'localhost',
    port: 5432,
    max: 20,
})

pool.on('connect', client => {
    console.log('Connected to the database');
})

pool.on('error', client => {
    console.log('Failed to connect to db.')
})

module.exports = pool;