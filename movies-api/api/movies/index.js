import express from 'express';
import {
  getMovies, getMovie, getMovieReviews, getGenres
} from '../tmdb-api';

const router = express.Router();

router.get('/', (req, res) => {
  getMovies().then(movies => res.status(200).send(movies));
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  getMovie(id).then(movie => res.status(200).send(movie));
  
});

router.get('/:id/reviews', (req, res, next) => {
  const id = parseInt(req.params.id);
  getMovieReviews(id)
  .then(reviews => res.status(200).send(reviews))
  .catch((error) => next(error));
});

router.get('/:id/genres', (req, res, next) => {
  const id = parseInt(req.params.id);
  getGenres(id)
  .then(genres => res.status(200).send(genres))
  .catch((error) => next(error));
});

export default router;