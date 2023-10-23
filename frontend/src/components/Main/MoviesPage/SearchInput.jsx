import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import axios from 'axios';
import { enqueueSnackbar } from 'notistack';

const SearchInput = ({ setMovies, setLoading }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // changes search term as user writes
    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    useEffect(() => {
        setLoading(true);
        // sends request to backend to get all movies
        axios
            .get('http://localhost:5555/movies/')
            .then((response) => {
                //filters through movie data when search term is changed
                if (searchTerm) {
                    setMovies((prevMovies) =>
                        prevMovies.filter((movie) =>
                            movie.fullTitle
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase())
                        )
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
    }, [searchTerm]);

    return (
        <form>
            <div>
                <label
                    htmlFor='search'
                    className='font-semibold text-white text-xl tracking-wide'
                    style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 1)',
                    }}>
                    Search for movies
                </label>
                <br />

                <div className='flex w-fit rounded-r  items-center bg-white rounded'>
                    <input
                        className='bg-transparent text-black px-2 py-1.5 rounded '
                        type='search'
                        name='search'
                        id='search'
                        value={searchTerm}
                        onChange={handleChange}
                        // required
                        placeholder='write the input text'
                    />
                    <button
                        type='submit'
                        className=' bg-gray-200 text-black py-[9px] px-2.5 max-h-full block'>
                        <BiSearchAlt />
                    </button>
                </div>
            </div>
        </form>
    );
};

SearchInput.propTypes = {
    setLoading: PropTypes.func,
    setMovies: PropTypes.func,
};
export default SearchInput;
