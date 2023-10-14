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
                Genre: '',
                Plot: '',
                Year: '',
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
                Genre: movieData.Genre,
                Plot: movieData.Plot,
                Year: movieData.Year,
                thumbnail: movieData.Poster,
                imdbRating: movieData.imdbRating,
            }));
        }
    } catch (error) {
        console.log(error);
        setErrMessage(`${error.message}: check your network`);
    }
};
