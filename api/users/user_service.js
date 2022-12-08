const db = require("../../config/database");

module.exports = {
  create: (data, callback) => {
    db.query(
      `insert into registration(firstName,lastName, gender, email, passkey, phone) values (?,?,?,?,?,?)`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.passkey,
        data.phone,
      ],
      (error, results) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  getUsers: (callback) => {
    db.query(`select * from registration`, [], (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    });
  },

  getUsersById: (id, callback) => {
    db.query(
      `select * from registration where id =?`[id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  updateUser: (data, callback) => {
    db.query(
      `update resistration set firstName=?, lastName=?, gender=?, email=?, password=?, number=?, where id=?`,
      [
        data.firstName,
        data.lastName,
        data.gender,
        data.email,
        data.passkey,
        data.phone,
        data.id,
      ],
      (error, results, fields) => {
        if (error) {
          callback(error);
        }
        return callback(null, results);
      }
    );
  },

  deleteUser: (data, callback) => {
    db.query(
      `delete from registration where id=?`,
      [data.id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
};
