import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../../Spinner';
import MovieCards from './MovieCards';
import { Link } from 'react-router-dom';
import { GiFilmSpool } from 'react-icons/gi';
import SearchInput from './SearchInput';
import SortTitle from './SortTitle';
import SortYear from './SortYear';
import { enqueueSnackbar } from 'notistack';

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        // sends a request to the backend to grab all the movies
        axios
            .get('http://localhost:5555/movies/')
            .then((response) => {
                // sets movie array to the new movies
                setMovies(response.data.data);
                setLoading(false);
            })
            .catch(() => {
                // displays error if movies cannot be fetched
                enqueueSnackbar('Movies cannot be fetched! Check network!', {
                    variant: 'error',
                });
                setLoading(false);
            });
    }, []);

    return (
        <section>
            <div className='container mx-auto md:px-4 px-6 md:py-20 py-14'>
                <h2 className='animate-trackingInExpand lg:text-4xl sm:text-3xl text-2xl font-abril text-gold'>
                    Your Top 10 Movies
                </h2>

                {/* Displays when multiple movies have been saved to the database */}
                {movies.length > 0 && (
                    <>
                        <p
                            className=' sm:text-lg my-4'
                            style={{
                                textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                            }}>
                            Click on the info button below the movie poster to
                            see more.
                        </p>
                        <div className='grid gap-4 md:grid-cols-3 sm:grid-cols-2 mb-14'>
                            <SearchInput
                                setMovies={setMovies}
                                setLoading={setLoading}
                            />

                            <SortTitle
                                setMovies={setMovies}
                                setLoading={setLoading}
                            />

                            <SortYear
                                setMovies={setMovies}
                                setLoading={setLoading}
                            />
                        </div>
                    </>
                )}

                {loading ? (
                    // displays spinner
                    <Spinner />
                ) : movies.length < 1 ? (
                    // displays when no movies have been added
                    <div className='py-16 text-center flex flex-col justify-center items-center'>
                        <GiFilmSpool className='mb-5 sm:text-5xl text-4xl animate-pulse text-white' />

                        <p className='lg:text-3xl sm:text-2xl text-xl font-semibold'>
                            No movies added yet! Got to{' '}
                            <Link
                                to='/add-movie'
                                className='text-gold underline'>
                                this page
                            </Link>{' '}
                            to add movies
                        </p>
                    </div>
                ) : (
                    // displays when movies have been added
                    <MovieCards
                        movies={movies}
                        setMovies={setMovies}
                        setLoading={setLoading}
                    />
                )}
            </div>
        </section>
    );
};

export default Movies;
