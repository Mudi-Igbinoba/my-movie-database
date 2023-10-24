import { useEffect, useState } from 'react';
import { getMovieData } from './GetMovieData';
import MoviePoster from './MoviePoster';
import { enqueueSnackbar } from 'notistack';
import axios from 'axios';

const AddMovie = () => {
    // State for loading
    const [loading, setLoading] = useState(false);
    // state for new movie data
    const [newMovie, setNewMovie] = useState({
        title: '',
        genre: '',
        plot: '',
        year: '',
        personalRating: '',
        notes: '',
    });
    // api key for omdb api
    const apiKey = import.meta.env.VITE_APIKEY;
    // omdb api url
    const url = `https://www.omdbapi.com/?t=${newMovie.title}&apikey=${apiKey}`;
    // state to determine if movie is found or not
    const [movieFound, setMovieFound] = useState(true);

    // Function to keep up with the movie state when it changes
    const handleChange = (event) => {
        if (event.target.name === 'title' && event.target.value === '') {
            // Clear all fields when title is cleared
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                title: '',
                genre: '',
                plot: '',
                year: '',
            }));
        } else {
            // set newMovie data state
            setNewMovie((prevMovie) => ({
                ...prevMovie,
                [event.target.name]: event.target.value,
            }));
        }
    };

    // function to handle submit of the form
    const handleSubmit = (event) => {
        // to prevent reloading the document
        event.preventDefault();
        // start loading
        setLoading(true);
        // sends movie data to backend
        axios
            .post(
                'https://my-movie-database-backend.vercel.app/movies/',
                newMovie
            )
            .then(() => {
                setLoading(false);
                setNewMovie({
                    title: '',
                    genre: '',
                    plot: '',
                    year: '',
                    personalRating: '',
                    notes: '',
                });
                // shows when a movie is added successfully
                enqueueSnackbar('Movie added successfully', {
                    variant: 'success',
                });
            })
            .catch((error) => {
                setLoading(false);
                // shows when a movie is not added
                enqueueSnackbar(error.response.data.message, {
                    variant: 'error',
                });
            });
    };

    useEffect(() => {
        if (newMovie.title) {
            // calls the function that gets movie from omdb
            getMovieData(url, setNewMovie, setMovieFound);
        }
    }, [url, newMovie.title]);

    return (
        <section className='container mx-auto md:px-4 px-6 md:py-20 py-10'>
            <h2
                className='animate-trackingInExpand lg:text-4xl sm:text-3xl text-2xl  font-abril text-gold'
                style={{ textShadow: '0px 0px 0px rgb(204, 163, 84)' }}>
                Add Movie
            </h2>
            <p
                className='sm:text-xl my-5'
                style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                Fill out the form below to add your favorite movie . To get the
                right data, write out the{' '}
                <span className='underline text-gold decoration-double underline-offset-4'>
                    full title of the movie
                </span>{' '}
                .
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} action='' className='animate-fadeIn'>
                <MoviePoster
                    title={newMovie.title}
                    thumbnail={newMovie.thumbnail}
                />

                <div className='py-5 md:grid flex flex-col gap-4 md:grid-cols-2 grid-cols-1 text-center'>
                    <div>
                        <label
                            htmlFor='title'
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
                            Movie Title
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
                    </div>

                    <div>
                        <label
                            htmlFor='releaseDate'
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
                            Release Date
                        </label>
                        <br />

                        <input
                            className='read-only:bg-gray-300 placeholder:text-gray-700 text-black px-2 py-1.5 mt-2 rounded w-4/5'
                            type='text'
                            name='year'
                            id='releaseDate'
                            onChange={handleChange}
                            required
                            value={newMovie.year}
                            readOnly={true}
                            placeholder='The year the movie was released'
                        />
                    </div>

                    <div>
                        <label
                            htmlFor='genre'
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
                            Genre
                        </label>
                        <br />

                        <input
                            className='read-only:bg-gray-300 placeholder:text-gray-700 text-black px-2 py-1.5 mt-2 rounded w-4/5'
                            type='text'
                            name='genre'
                            id='genre'
                            onChange={handleChange}
                            value={newMovie.genre}
                            required
                            readOnly={true}
                            placeholder='genre of the movie'
                        />
                    </div>
                    <div>
                        <label
                            htmlFor='personalRating'
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
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
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
                            Plot
                        </label>
                        <br />

                        <textarea
                            className='read-only:bg-gray-300 placeholder:text-gray-700 text-black px-2 py-1.5 mt-2 rounded w-4/5'
                            name='plot'
                            id='plot'
                            required
                            value={newMovie.plot}
                            readOnly={true}
                            onChange={handleChange}
                            placeholder='plot of the movie'
                            rows='5'></textarea>
                    </div>

                    <div className=''>
                        <label
                            htmlFor='notes'
                            className='font-abril text-slate-200 text-xl tracking-wide'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
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

                    {/* Submit Button */}
                    <button
                        type='submit'
                        disabled={!movieFound}
                        className='disabled:bg-gray-300  md:col-span-2 shadow bg-gold w-[160px] h-[70px] mx-auto mt-5 rounded duration-500 hover:bg-white hover:text-gold'>
                        {/* displays a spinner when movie is not found */}
                        {loading ? (
                            <div className='animate-ping w-5 h-5 my-5 mx-auto rounded-full bg-black'></div>
                        ) : !movieFound ? (
                            <span className='text-red-600 font-bold'>
                                Movie not found!
                            </span>
                        ) : (
                            'Add Movie'
                        )}
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AddMovie;
