import { useState } from 'react';

const AddMovieForm = () => {
    const [movies, setMovies] = useState([]);
    const [newMovie, setNewMovie] = useState({
        title: '',
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
            <div className='name'>
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
                className='shadow bg-gold w-[160px] h-[70px] m-auto rounded duration-500 hover:bg-indigo-950'>
                Add Movie
            </button>
        </form>
    );
};

export default AddMovieForm;
