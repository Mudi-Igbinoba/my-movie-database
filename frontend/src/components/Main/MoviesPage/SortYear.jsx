import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SortYear = ({ setMovies, setLoading }) => {
    const [sortOption, setSortOption] = useState('');

    // changes sort option for title
    const handleSortYear = (event) => {
        setSortOption(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        // sends request to backend to get all movies
        axios
            .get('https://my-movie-database-backend.vercel.app/movies/')
            .then((response) => {
                // displays movies in ascending order by year
                if (sortOption === 'asc') {
                    setMovies((prevMovies) =>
                        prevMovies.slice().sort((a, b) => a.year - b.year)
                    );
                    // displays movies in descending order by year
                } else if (sortOption === 'desc') {
                    setMovies((prevMovies) =>
                        prevMovies.sort((a, b) => b.year - a.year)
                    );
                } else {
                    //displays all movies
                    setMovies(response.data.data);
                }
                setLoading(false);
            })
            .catch(() => {
                // displays error if movies cannot be fetched
                enqueueSnackbar('Movies cannot be fetched! Check network!', {
                    variant: 'error',
                });
                setLoading(false);
            });
    }, [sortOption]);
    return (
        <form>
            <label
                htmlFor='sortYear'
                className='font-semibold text-white text-xl tracking-wide'
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                }}>
                Sort by year
            </label>{' '}
            <br />
            <select
                name='sortYear'
                id='sortYear'
                className='text-black py-2 rounded'
                onChange={handleSortYear}>
                <option value=''>Choose an option</option>
                <option value='asc'>Sort by Year (Ascending)</option>
                <option value='desc'>Sort by Year (Descending)</option>
            </select>
        </form>
    );
};

SortYear.propTypes = {
    setLoading: PropTypes.func,
    setMovies: PropTypes.func,
};
export default SortYear;
