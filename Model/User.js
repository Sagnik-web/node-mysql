const db = require('../DBConfig/DB.config')

const table_name = 'users'

const User = {

    emailCheck: (userData,callback)=>{
        const sql = `SELECT * FROM ${table_name} WHERE email=?`
        db.query(sql,[userData.email], callback);
    },

  create: (userData, callback) => {
    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [userData.username, userData.email, userData.password], callback);
  },
  



  getAll: (callback) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, callback);
  },

  getById: (id, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  },

  update: (id, userData, callback) => {
    const sql = 'UPDATE users SET name = ?, value = ? WHERE id = ?';
    db.query(sql, [userData.name, userData.value, id], callback);
  },

  delete: (id, callback) => {
    const sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = User;
