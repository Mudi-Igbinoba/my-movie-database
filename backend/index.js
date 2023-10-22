import { port, DB } from './utils/config.js';
import express from 'express';
import mongoose from 'mongoose';
import moviesRoute from './routes/moviesRoute.js';
import cors from 'cors';
import morgan from 'morgan';
import {
    requestLogger,
    unknownEndpoint,
    errorHandler,
} from './utils/middleware.js';
import { info, error } from './utils/logger.js';

// starts express app
const app = express();

mongoose.set('strictQuery', false);

info('connecting to', DB);

mongoose
    .connect(DB)
    .then(() => {
        console.log('App connected to a database');
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

// Middleware for parsing request body
app.use(express.json());
// Middleware for CORS policy
app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(requestLogger);

// Development logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

morgan.token('data', (request) => {
    return request.method === 'POST' ? JSON.stringify(request.body) : ' ';
});

app.use(
    morgan(
        ':method :url :status :res[content-length] - :response-time ms :data'
    )
);

//Routes
app.use('/movies', moviesRoute);
app.use(unknownEndpoint);
app.use(errorHandler);
