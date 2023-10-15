import express from 'express';
import { PORT } from './config.js';

const app = express();

// let movies = [
//     {
//         id: 1,
//         title: 'Adventure Land',
//         genre: 'Adventure',
//         plot: 'Idk',
//         releaseDate: '2020',
//         personalRating: '4',
//         notes: 'kdlsdjds',
//     },
// ];

app.get('/', (request, response) => {
    response.status(234).send('Hello World!');
});

// app.get('/api/notes', (request, response) => {
//     response.json(movies);
// });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
