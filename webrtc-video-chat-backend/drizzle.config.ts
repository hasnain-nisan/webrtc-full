import { defineConfig } from 'drizzle-kit';

import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'your_default_db_name',
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  },
});