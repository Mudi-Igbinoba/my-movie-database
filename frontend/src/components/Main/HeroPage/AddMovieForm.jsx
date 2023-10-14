import { useEffect, useState } from 'react';
import { getMovieData } from './GetMovieData';
import MoviePoster from './MoviePoster';

const AddMovieForm = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        title: '',
        genre: '',
        plot: '',
        year: '',
        personalRating: '',
        notes: '',
    });
    const [errMessage, setErrMessage] = useState('');
    const apiKey = import.meta.env.VITE_APIKEY;
    const url = `https://www.omdbapi.com/?t=${newMovie.title}&apikey=${apiKey}`;

    const handleChange = (event) => {
        setNewMovie((prevMovie) => ({
            ...prevMovie,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    // console.log(movies);

    useEffect(() => {
        if (newMovie.title) {
            getMovieData(url, setErrMessage, setNewMovie);
        }
    }, [url, newMovie.title]);

    return (
        <form onSubmit={handleSubmit} action=''>
            <MoviePoster
                title={newMovie.title}
                thumbnail={newMovie.thumbnail}
            />
            <div className='py-5 grid gap-4 md:grid-cols-2 grid-cols-1 text-center'>
                <div>
                    <label
                        htmlFor='title'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        Movie title
                    </label>
                    <br />

                    <input
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        type='text'
                        name='title'
                        id='title'
                        value={newMovie.title}
                        onChange={handleChange}
                        required
                        placeholder='The full title of the movie'
                    />

                    <p className='my-3 text-red-600 font-bold'>{errMessage}</p>
                </div>

                <div>
                    <label
                        htmlFor='releaseDate'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        Release Date
                    </label>
                    <br />

                    <input
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        type='text'
                        name='year'
                        id='releaseDate'
                        onChange={handleChange}
                        required
                        value={newMovie.year}
                        placeholder='The year the movie was released'
                    />
                </div>

                <div>
                    <label
                        htmlFor='genre'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        genre
                    </label>
                    <br />

                    <input
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        type='text'
                        name='genre'
                        id='genre'
                        onChange={handleChange}
                        value={newMovie.genre}
                        required
                        placeholder='genre of the movie'
                    />
                </div>
                <div>
                    <label
                        htmlFor='personalRating'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        Your Personal Rating
                    </label>
                    <br />

                    <input
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        type='number'
                        name='personalRating'
                        id='personalRating'
                        max='10'
                        min='1'
                        step='any'
                        required
                        value={newMovie.personalRating}
                        onChange={handleChange}
                        placeholder='Rate it between 1 and 10'
                    />
                </div>

                <div className=''>
                    <label
                        htmlFor='plot'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        plot
                    </label>
                    <br />

                    <textarea
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        name='plot'
                        id='plot'
                        required
                        value={newMovie.plot}
                        onChange={handleChange}
                        placeholder='plot of the movie'
                        rows='5'></textarea>
                </div>

                <div className=''>
                    <label
                        htmlFor='notes'
                        className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                        Personal Notes
                    </label>
                    <br />

                    <textarea
                        className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                        name='notes'
                        id='notes'
                        required
                        value={newMovie.notes}
                        onChange={handleChange}
                        placeholder='Tell us what you think about this movie'
                        rows='5'></textarea>
                </div>

                <button
                    type='submit'
                    className='md:col-span-2 shadow bg-gold w-[160px] h-[70px] mx-auto my-5 rounded duration-500 hover:bg-indigo-950'>
                    Add Movie
                </button>
            </div>
        </form>
    );
};

export default AddMovieForm;
