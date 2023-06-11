import sqlite3 from "sqlite3";
import { open } from "sqlite";
import bcrypt from "bcryptjs";

const initializeDatabase = async () => {
  const db = await open({
    filename: "./data/mydb.sqlite",
    driver: sqlite3.Database,
  });

  await db.exec(`
  CREATE TABLE IF NOT EXISTS admins (
      username TEXT PRIMARY KEY,
      password TEXT
  );
  
  CREATE TABLE IF NOT EXISTS companies (
      company_id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_name TEXT,
      company_api_key TEXT
  );
  
  CREATE TABLE IF NOT EXISTS locations (
      location_id INTEGER PRIMARY KEY AUTOINCREMENT,
      company_id INTEGER,
      location_name TEXT,
      location_country TEXT,
      location_city TEXT,
      location_meta TEXT,
      FOREIGN KEY (company_id) REFERENCES companies (company_id)
  );
  
  CREATE TABLE IF NOT EXISTS sensors (
      sensor_id INTEGER PRIMARY KEY AUTOINCREMENT,
      location_id INTEGER,
      sensor_name TEXT,
      sensor_category TEXT,
      sensor_meta TEXT,
      sensor_api_key TEXT,
      FOREIGN KEY (location_id) REFERENCES locations (location_id)
  );
  
  CREATE TABLE IF NOT EXISTS sensor_data (
    sensor_api_key TEXT,
    data TEXT,
    timestamp INTEGER
  );
  `);

  const admin = await db.get("SELECT * FROM admins WHERE username = ?", [
    "admin",
  ]);

  if (!admin) {
    const hashedPassword = bcrypt.hashSync("superadmin", 10);
    await db.run("INSERT INTO admins (username, password) VALUES (?, ?)", [
      "admin",
      hashedPassword,
    ]);
    console.log("Admin user created");
  }

  return db;
};

export default await initializeDatabase();
