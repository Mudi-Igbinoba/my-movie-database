import express from 'express';
import {
    createMovie,
    deleteMovie,
    getAllMovies,
    getMovieByID,
    updateMovie,
} from '../controllers/movieController.js';

// Creates express router
const router = express.Router();

// Sets route and controllers
router.route('/').post(createMovie).get(getAllMovies);
router.route('/:id').get(getMovieByID).put(updateMovie).delete(deleteMovie);

export default router;
