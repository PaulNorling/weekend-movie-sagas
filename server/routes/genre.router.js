const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  console.log('genre.router',req.params.id)
  // res.sendStatus(200);
  // Add query to get all genres
  const query = `SELECT "name"
  FROM "movies"
  JOIN "movies_genres"
  ON "movies"."id"="movies_genres"."movie_id"
  JOIN "genres"
  ON "movies_genres"."genre_id"="genres"."id"
  WHERE "movies"."id"=$1;`
  pool.query(query, [req.params.id])
    .then( result => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get data', err);
      res.sendStatus(500)
    })
    
});

module.exports = router;