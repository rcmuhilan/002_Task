// importing modules
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

// creating pg pool connection
const pool = new Pool({
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '5432'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

// Connect event emitter
pool.on('connect', () => {
    console.log("Pool connection is established");
})


export default pool;