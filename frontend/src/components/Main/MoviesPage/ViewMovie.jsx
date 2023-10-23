import { useEffect, useState } from 'react';
import BackButton from '../../BackButton';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../../Spinner';
import StarRating from './StarRating';
import { enqueueSnackbar } from 'notistack';

const ViewMovie = () => {
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        // sends a request to the backend to get a movie by its id
        axios
            .get(`http://localhost:5555/movies/${id}`)
            .then((response) => {
                //sets the movie data
                setMovie(response.data);
                setLoading(false);
            })
            .catch(() => {
                // displays error
                enqueueSnackbar('Movies cannot be fetched! Check network!', {
                    variant: 'error',
                });
                setLoading(false);
            });
    }, []);

    return (
        <section>
            <BackButton />
            <div className='container mx-auto md:px-4 px-6 py-10'>
                <h2 className='animate-trackingInExpand lg:text-4xl sm:text-3xl text-2xl font-abril text-gold'>
                    Movie Details
                </h2>

                <p
                    className='sm:text-lg my-4'
                    style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 1)' }}>
                    See the full details of your movie
                </p>

                {loading ? (
                    // displays spinner
                    <Spinner />
                ) : (
                    <div className='flex mt-8 items-center md:flex-nowrap flex-wrap'>
                        <div className='mb-5'>
                            {/* displays skeleton loader if thumbnail isn't available */}
                            {movie.thumbnail === 'N/A' || !movie.thumbnail ? (
                                <div className='w-[300px] h-[450px] mx-auto text-center bg-gray-300 flex flex-col justify-center items-center text-black'>
                                    <span>{movie.fullTitle}</span>
                                    <br />
                                    <span>N/A</span>
                                </div>
                            ) : (
                                // displays thumbnail
                                <img
                                    src={movie.thumbnail}
                                    alt={movie.fullTitle}
                                />
                            )}
                        </div>

                        <ul className='md:w-1/2 md:ml-10'>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Title:
                                </span>{' '}
                                {movie.fullTitle}
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Genre:
                                </span>{' '}
                                {movie.genre}
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Year:
                                </span>{' '}
                                {movie.year}
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Imdb Rating:
                                </span>{' '}
                                <StarRating rating={movie.imdbRating} />
                                <span className='ml-4 inline-block'>
                                    {movie.imdbRating}/10
                                </span>
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Your Rating:
                                </span>{' '}
                                <StarRating rating={movie.personalRating} />
                                <span className='ml-4 '>
                                    {movie.personalRating}/10
                                </span>
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Plot:
                                </span>{' '}
                                {movie.plot}
                            </li>
                            <li className='text-lg mb-3'>
                                {' '}
                                <span className=' md:text-2xl text-xl md:me-3 me-1 font-semibold underline  tracking-wide'>
                                    Notes:
                                </span>{' '}
                                <blockquote className='italic inline'>
                                    &quot;{movie.notes}&quot;
                                </blockquote>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ViewMovie;
