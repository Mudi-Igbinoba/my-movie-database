import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';

const BackButton = () => {
    const navigate = useNavigate();
    return (
        <div className='flex p-5'>
            {/* Navigates to previous page when clicked */}
            <button
                onClick={() => navigate(-1)}
                className='bg-gold text-white hover:bg-white hover:text-gold duration-500 px-4 py-2 rounded w-fit'>
                <BsArrowLeft className='text-3xl font-bold' />
            </button>
        </div>
    );
};

BackButton.propTypes = {
    destination: PropTypes.string,
};

export default BackButton;
