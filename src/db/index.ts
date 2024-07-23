import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import path from 'path';

console.log(__dirname);

const sqlite = new Database(path.resolve('./src/db/sqlite.db'), {
    fileMustExist: true
});
const db = drizzle(sqlite);

export default db;
