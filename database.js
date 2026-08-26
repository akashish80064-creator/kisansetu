const Database=require('better-sqlite3');const bcrypt=require('bcryptjs');
const db=new Database('kisansetu.db');
db.exec(`CREATE TABLE IF NOT EXISTS farmers(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,phone TEXT UNIQUE NOT NULL,village TEXT NOT NULL,password TEXT NOT NULL,created_at TEXT DEFAULT CURRENT_TIMESTAMP);CREATE TABLE IF NOT EXISTS procurements(id INTEGER PRIMARY KEY AUTOINCREMENT,farmer_id INTEGER NOT NULL,crop TEXT NOT NULL,quantity REAL NOT NULL,status TEXT DEFAULT 'Pending',created_at TEXT DEFAULT CURRENT_TIMESTAMP);`);
if(!db.prepare('SELECT id FROM farmers WHERE phone=?').get('9876543210')) db.prepare('INSERT INTO farmers(name,phone,village,password) VALUES(?,?,?,?)').run('Ramesh Kumar','9876543210','Rampur',bcrypt.hashSync('farmer123',10));
module.exports={db,officerPhone:'9999999999',officerPassword:'officer123'};
