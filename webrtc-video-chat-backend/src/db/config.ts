import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";


import dotenv from 'dotenv';
dotenv.config();


const connection = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'your_default_db_name',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
});

export const db = drizzle(connection);