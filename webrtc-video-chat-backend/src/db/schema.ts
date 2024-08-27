import { mysqlTable, varchar, int, timestamp, boolean } from 'drizzle-orm/mysql-core';

export const users = mysqlTable('users', {
    id: int('id').primaryKey().autoincrement(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    firstName: varchar('first_name', { length: 50 }),
    lastName: varchar('last_name', { length: 50 }),
    avatar: varchar('avatar', { length: 255 }),
    bio: varchar('bio', { length: 500 }),
    lastSeen: timestamp('last_seen').defaultNow(),
    isOnline: boolean('is_online').default(false),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow().onUpdateNow(),
});
