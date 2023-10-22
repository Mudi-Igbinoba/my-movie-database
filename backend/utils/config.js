import 'dotenv/config';

// Setting port
const port = process.env.PORT || 4000;

// Setting database
const DB = process.env.DATABASE.replace(
    '<password>',
    process.env.DATABASE_PASSWORD
);

export { port, DB };
