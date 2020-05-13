let express = require('express');
const { Pool, Client } = require('pg')
let app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log('App listening on port ' + PORT);
});

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

let addScore = async (person, score, description) => {
    let assignment = {
        person: person,
        score: score,
        description: description,
    }
    await pool.query('BEGIN')

    await pool.query('COMMIT')

};


