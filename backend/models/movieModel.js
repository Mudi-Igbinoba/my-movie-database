import mongoose from 'mongoose';

const movieSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        genre: {
            type: String,
            required: [true, 'Genre is required'],
        },
        plot: {
            type: String,
            required: [true, 'Plot is required'],
        },
        year: {
            type: String,
            required: [true, 'Year is required'],
        },
        personalRating: {
            type: Number,
            min: [1, 'Too low'],
            max: [10, 'Too high'],
            required: [true, 'You forgot to add your personal rating'],
        },
        notes: {
            type: String,
            required: [true, 'You forgot to add your notes on the movie'],
        },
        imdbID: {
            type: String,
        },
        fullTitle: {
            type: String,
        },
        thumbnail: {
            type: String,
        },
        imdbRating: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

export const Movie = mongoose.model('Movie', movieSchema);
