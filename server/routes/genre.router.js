const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  const query = `SELECT "genres"."name", count("genres"."name")
  FROM "movies"
  JOIN "movies_genres"
  ON "movies"."id"="movies_genres"."movie_id"
  JOIN "genres"
  ON "movies_genres"."genre_id"="genres"."id"
  GROUP BY "genres"."name";`
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get data', err);
      res.sendStatus(500)
    })
    
});

module.exports = router;