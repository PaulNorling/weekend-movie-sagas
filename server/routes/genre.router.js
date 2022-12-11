const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Select genres by movie id
  const query = `SELECT "name"
  FROM "movies"
  JOIN "movies_genres"
  ON "movies"."id"="movies_genres"."movie_id"
  JOIN "genres"
  ON "movies_genres"."genre_id"="genres"."id"
  WHERE "movies"."id"=$1;`
  pool.query(query, [req.params.id])
    .then( result => {
      console.log('poolquery', result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get data', err);
      res.sendStatus(500)
    })
    
});

module.exports = router;