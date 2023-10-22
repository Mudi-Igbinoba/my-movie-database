import { Movie } from '../models/movieModel.js';

// Route for saving a new movie
const createMovie = async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.genre ||
            !request.body.plot ||
            !request.body.year ||
            !request.body.personalRating ||
            !request.body.notes ||
            !request.body.fullTitle ||
            !request.body.imdbID ||
            !request.body.thumbnail ||
            !request.body.imdbRating
        ) {
            return response.status(400).send({
                message: 'Make sure all required fields are filled!',
            });
        }

        // Check if the limit of 10 movies is reached
        const movieCount = await Movie.countDocuments();

        if (movieCount >= 10) {
            return response.status(400).send({
                message:
                    'You have reached the limit of 10 movies in your list.',
            });
        }

        // Check if movie has been added before
        const existingMovie = await Movie.findOne({
            fullTitle: request.body.fullTitle,
        });

        if (existingMovie) {
            return response.status(400).send({
                message: 'This movie already exists on your list.',
            });
        }

        const newMovie = {
            title: request.body.title,
            genre: request.body.genre,
            plot: request.body.plot,
            year: request.body.year,
            personalRating: request.body.personalRating,
            notes: request.body.notes,
            imdbID: request.body.imdbID,
            fullTitle: request.body.fullTitle,
            thumbnail: request.body.thumbnail,
            imdbRating: request.body.imdbRating,
        };

        const movie = await Movie.create(newMovie);
        return response.status(201).send(movie);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route to get all movies
const getAllMovies = async (request, response) => {
    try {
        const movies = await Movie.find({});
        return response.status(200).json({
            count: movies.length,
            data: movies,
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// Route to get one movie by id
const getMovieByID = async (request, response) => {
    try {
        const { id } = request.params;

        const movie = await Movie.findById(id);

        return response.status(200).json(movie);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// route to update a movie
const updateMovie = async (request, response) => {
    try {
        if (
            !request.body.title ||
            !request.body.genre ||
            !request.body.plot ||
            !request.body.year ||
            !request.body.personalRating ||
            !request.body.notes
        ) {
            return response.status(400).send({
                message:
                    'Send all required fields: title, genre, plot, year, personal rating, notes ',
            });
        }

        const { id } = request.params;
        const result = await Movie.findByIdAndUpdate(id, request.body);

        if (!result) {
            return response.status(404).json({ message: 'Movie not found' });
        }

        return response
            .status(200)
            .send({ message: 'Movie updated successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

// route to delete a movie
const deleteMovie = async (request, response) => {
    try {
        const { id } = request.params;

        const result = await Movie.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: 'Movie not found' });
        }

        return response
            .status(200)
            .send({ message: 'Movie deleted successfully' });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({ message: error.message });
    }
};

export { createMovie, getAllMovies, getMovieByID, updateMovie, deleteMovie };
