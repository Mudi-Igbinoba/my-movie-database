import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import PropTypes from 'prop-types';

// component for stars
const StarRating = ({ rating }) => {
    const starElements = [];
    const maxStars = 10; //total number of stars
    const fullStars = Math.floor(rating); //number of full stars
    const hasHalfStar = rating % 1 !== 0; //check if there's a half star

    // for loop to display all full stars
    for (let i = 0; i < fullStars; i++) {
        starElements.push(<BsStarFill key={i} className='text-gold text-xl' />);
    }

    // displays a half star
    if (hasHalfStar) {
        starElements.push(
            <BsStarHalf key={fullStars} className='text-gold text-xl' />
        );
    }

    // loop to display empty stars
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < maxStars; i++) {
        starElements.push(<BsStar key={i} className='text-gold text-xl' />);
    }
    return (
        <div className='inline-flex gap-3  items-center flex-wrap'>
            {starElements}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number,
};
export default StarRating;
