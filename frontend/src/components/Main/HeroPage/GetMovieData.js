import axios from 'axios';

export const getMovieData = async (url, setErrMessage, setNewMovie) => {
    try {
        const response = await axios.get(url);
        const movieData = response.data;
        console.log(movieData);
        if (movieData.Error) {
            setErrMessage('Movie not found!');
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                genre: '',
                plot: '',
                year: '',
                id: '',
                fullTitle: '',
                thumbnail: '',
                imdbRating: '',
            }));
        } else {
            setErrMessage();
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                id: movieData.imdbID,
                fullTitle: movieData.Title,
                genre: movieData.Genre,
                plot: movieData.Plot,
                year: movieData.Year,
                thumbnail: movieData.Poster,
                imdbRating: movieData.imdbRating,
            }));
        }
    } catch (error) {
        console.log(error);
        setErrMessage(`${error.message}: check your network`);
    }
};
