import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

export const getMovieData = async (url, setNewMovie, setMovieFound) => {
    try {
        const response = await axios.get(url);
        const movieData = response.data;

        if (movieData.Error) {
            setMovieFound(false);
            // displays error if movie is not found
            enqueueSnackbar('Movie not found! Try another title', {
                variant: 'error',
            });

            // resets the add movie form
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                genre: '',
                plot: '',
                year: '',
                imdbID: '',
                fullTitle: '',
                thumbnail: '',
                imdbRating: '',
            }));
        } else {
            setMovieFound(true);

            // gets newMovie from omdb and saves it in the new movie array
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                imdbID: movieData.imdbID,
                fullTitle: movieData.Title,
                genre: movieData.Genre,
                plot: movieData.Plot,
                year: movieData.Year,
                thumbnail: movieData.Poster,
                imdbRating: movieData.imdbRating,
            }));
        }
    } catch (error) {
        // shows an error when network is bad
        enqueueSnackbar(`${error.message}: check your network`, {
            variant: 'error',
        });

        setMovieFound(false);
    }
};
