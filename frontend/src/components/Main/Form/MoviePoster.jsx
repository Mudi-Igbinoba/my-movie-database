import { PropTypes } from 'prop-types';

const MoviePoster = ({ title, thumbnail }) => {
    // displays a skeleton screen when title or thumbnail is blank
    return title === '' || thumbnail === '' ? (
        <div className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black'>
            <span>Poster will appear here</span>
        </div>
    ) : // displays a skeleton screen when thumbnail is not available
    thumbnail === 'N/A' ? (
        <div className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black'>
            <span>No image available</span>
        </div>
    ) : (
        // displays image when thumbnail is available
        <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className='animate-fadeIn w-[200px] h-[300px] mx-auto text-center bg-gray-300 flex justify-center items-center text-black bg-cover bg-center'></div>
    );
};

MoviePoster.propTypes = {
    title: PropTypes.string,
    thumbnail: PropTypes.string,
};

export default MoviePoster;
