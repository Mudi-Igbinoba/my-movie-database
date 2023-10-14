import { PropTypes } from 'prop-types';

const MoviePoster = ({ title, thumbnail }) => {
    return title === '' ? (
        <div className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black'>
            <span>Poster will appear here</span>
        </div>
    ) : thumbnail ? (
        <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black bg-cover bg-center'></div>
    ) : (
        <div className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black'>
            <span>No image available</span>
        </div>
    );
};

MoviePoster.propTypes = {
    title: PropTypes.string,
    thumbnail: PropTypes.string,
};

export default MoviePoster;
