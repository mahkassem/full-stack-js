import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    host: 'db-udacity-28381.ctz64cimsxb0.us-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    database: 'postgres',
    port: 5432
});

export default pool;