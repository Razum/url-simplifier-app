import { text, integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const urls = sqliteTable('urls', {
    id: integer('id').primaryKey({ autoIncrement: true }),
    originalUrl: text('originalUrl').notNull(),
    shortUrl: text('shortUrl').notNull()
});
