import axios from 'axios';
import { enqueueSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const SortTitle = ({ setMovies, setLoading }) => {
    const [sortOption, setSortOption] = useState('');

    // changes sort option for title
    const handleSortTitle = (event) => {
        setSortOption(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        // sends request to backend to get all movies
        axios
            .get('https://my-movie-database-backend.vercel.app/movies/')
            .then((response) => {
                // displays movies in ascending order by title
                if (sortOption === 'asc') {
                    setMovies((prevMovies) =>
                        prevMovies
                            .slice()
                            .sort((a, b) =>
                                a.fullTitle.localeCompare(b.fullTitle)
                            )
                    );
                    // displays movies in descending order by title
                } else if (sortOption === 'desc') {
                    setMovies((prevMovies) =>
                        prevMovies.sort((a, b) =>
                            b.fullTitle.localeCompare(a.fullTitle)
                        )
                    );
                    //displays all movies
                } else {
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
                htmlFor='sortTitle'
                className='font-semibold text-white text-xl tracking-wide'
                style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                }}>
                Sort by title
            </label>{' '}
            <br />
            <select
                name='sortTitle'
                id='sortTitle'
                className='text-black py-2 rounded'
                onChange={handleSortTitle}>
                <option value=''>Choose an option</option>
                <option value='asc'>Sort by Title (Ascending)</option>
                <option value='desc'>Sort by Title (Descending)</option>
            </select>
        </form>
    );
};

SortTitle.propTypes = {
    setLoading: PropTypes.func,
    setMovies: PropTypes.func,
};
export default SortTitle;
