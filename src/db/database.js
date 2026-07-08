import * as SQLite from 'expo-sqlite';
let db;

export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('furniture_pos.db');

  }
  return db;
}


export async function initDb() {
  const db = await getDb();

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    
    CREATE TABLE IF NOT EXISTS categories (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
  );
  
  
  
  )`)
}

