import { migrate } from 'drizzle-orm/mysql2/migrator';
import { db } from './config';
import { resolve } from 'path';

// This will run migrations on the database, skipping the ones already applied
async function runMigrations() {
  await migrate(db, { migrationsFolder: resolve(__dirname, '../../drizzle') });
  console.log('Migrations complete');
  process.exit(0);
}

runMigrations().catch(console.error);