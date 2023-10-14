import { useState } from 'react';

const AddMovieForm = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        title: '',
        genre: '',
        plot: '',
        releaseDate: '',
        personalRating: '',
        notes: '',
    });
    const handleChange = (event) => {
        setNewMovie((prevMovie) => ({
            ...prevMovie,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setMovies((prevMovies) => [...prevMovies, newMovie]);
    };

    return (
        <form
            onSubmit={handleSubmit}
            action=''
            className='py-5 grid gap-4 md:grid-cols-2 grid-cols-1 text-center'>
            <div>
                <label
                    htmlFor='title'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Movie Title
                </label>
                <br />

                <input
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    type='text'
                    name='title'
                    id='title'
                    onChange={handleChange}
                    required
                    placeholder='The full title of the movie'
                />
            </div>

            <div>
                <label
                    htmlFor='genre'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Genre
                </label>
                <br />

                <input
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    type='text'
                    name='genre'
                    id='genre'
                    onChange={handleChange}
                    required
                    placeholder='Genre of the movie'
                />
            </div>
            <div>
                <label
                    htmlFor='personalRating'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Your Personal Rating
                </label>
                <br />

                <input
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    type='number'
                    name='personalRating'
                    id='personalRating'
                    max='5'
                    min='1'
                    required
                    onChange={handleChange}
                    placeholder='Rate it between 1 and 5'
                />
            </div>

            <div>
                <label
                    htmlFor='releaseDate'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Release Date
                </label>
                <br />

                <input
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    type='number'
                    name='releaseDate'
                    id='releaseDate'
                    onChange={handleChange}
                    required
                    placeholder='Release date of the movie'
                />
            </div>

            <div className=''>
                <label
                    htmlFor='plot'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Plot
                </label>
                <br />

                <textarea
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    name='plot'
                    id='plot'
                    required
                    onChange={handleChange}
                    placeholder='Plot of the movie'
                    rows='5'></textarea>
            </div>

            <div className=''>
                <label
                    htmlFor='notes'
                    className='font-limeLight text-indigo-100 text-xl tracking-wide'>
                    Personal Notes
                </label>
                <br />

                <textarea
                    className='text-black px-2 py-1.5 mt-2 rounded w-4/5'
                    name='notes'
                    id='notes'
                    required
                    onChange={handleChange}
                    placeholder='Tell us what you think about this movie'
                    rows='5'></textarea>
            </div>

            <button
                type='submit'
                className='md:col-span-2 shadow bg-gold w-[160px] h-[70px] mx-auto my-5 rounded duration-500 hover:bg-indigo-950'>
                Add Movie
            </button>
        </form>
    );
};

export default AddMovieForm;
