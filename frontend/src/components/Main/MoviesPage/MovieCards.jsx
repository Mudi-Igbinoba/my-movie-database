import PropTypes from 'prop-types';
import { BsInfoCircle } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const MovieCards = ({ movies, setLoading, setMovies }) => {
    // function to handle deleting a movie
    const handleDelete = (id) => {
        setLoading(true);

        // sends a request to the backend to delete based of id
        axios
            .delete(`https://my-movie-database-backend.vercel.app/movies/${id}`)
            .then((res) => {
                // filter the remaining movies
                setMovies((prevMovies) =>
                    prevMovies.filter((movie) => movie._id !== id)
                );
                setLoading(false);
                // shows success icon when movie is deleted
                enqueueSnackbar(res.data.message, {
                    variant: 'success',
                });
            })
            .catch(() => {
                setLoading(false);
                // shows error when movie did not deleted
                enqueueSnackbar('Movie not deleted!', {
                    variant: 'error',
                });
            });
    };
    return (
        <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 auto-rows-fr gap-x-8 gap-y-12 mt-8'>
            {/* Maps through the movies array */}
            {movies.map((movie) => (
                <div key={movie._id}>
                    {/* Displays a skeleton loader when a thumbnail is not available */}
                    {movie.thumbnail === 'N/A' || !movie.thumbnail ? (
                        <div className='w-full h-[72%] mx-auto text-center bg-gray-300 flex flex-col justify-center items-center text-black'>
                            <span>{movie.fullTitle}</span>
                            <br />
                            <span>N/A</span>
                        </div>
                    ) : (
                        // Displays thumbnail when it is not available
                        <img src={movie.thumbnail} alt={movie.fullTitle} />
                    )}
                    <h4 className='mt-3 text-xl font-semibold text-gold'>
                        {movie.fullTitle}
                    </h4>
                    <p className='mb-3'>{movie.year}</p>

                    <div className='grid grid-cols-2 gap-5'>
                        {/* Info button to see movie details */}
                        <Link
                            to={`/movies/details/${movie._id}`}
                            className=' p-3.5 bg-white text-black text-xl rounded-md hover:-translate-y-1.5 duration-500'>
                            <BsInfoCircle className='mx-auto' />
                        </Link>
                        {/* Delete button to see delete movies */}

                        <button
                            onClick={() => handleDelete(movie._id)}
                            className='p-3.5 bg-red-500 text-xl rounded-md hover:-translate-y-1.5 duration-500'>
                            <MdDeleteOutline className='mx-auto' />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

MovieCards.propTypes = {
    movies: PropTypes.array,
    setLoading: PropTypes.func,
    setMovies: PropTypes.func,
};
export default MovieCards;
