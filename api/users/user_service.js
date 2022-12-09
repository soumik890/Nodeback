const db = require("../../config/database");

module.exports = {
  // create: (data, callback) => {
  //   db.query(
  //     `insert into registration(firstName,lastName, gender, email, passkey, phone) values (?,?,?,?,?,?)`,
  //     [
  //       data.firstName,
  //       data.lastName,
  //       data.gender,
  //       data.email,
  //       data.passkey,
  //       data.phone,
  //     ],
  //     (error, results) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },

  // getUsers: (callback) => {
  //   db.query(`select * from registration`, [], (error, results, fields) => {
  //     if (error) {
  //       return callback(error);
  //     }
  //     return callback(null, results);
  //   });
  // },

  // getUsersById: (data, callback) => {
  //   db.query(
  //     `select * from registration where id =?`,
  //     [data.id],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },

  // updateUser: (data, callback) => {
  //   db.query(
  //     `update registration set firstName=?, lastName=?, gender=?, email=?, passkey=?, phone=? where id=?`,
  //     [
  //       data.firstName,
  //       data.lastName,
  //       data.gender,
  //       data.email,
  //       data.passkey,
  //       data.phone,
  //       data.id,
  //     ],
  //     (error, results, fields) => {
  //       if (error) {
  //         callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },

  // deleteUser: (data, callback) => {
  //   db.query(
  //     `delete from registration where id=?`,
  //     [data.id],
  //     (error, results, fields) => {
  //       if (error) {
  //         return callback(error);
  //       }
  //       return callback(null, results);
  //     }
  //   );
  // },

  AllFunction: (data, callback) => {
    console.log(data.action);
    if (data.action == "create") {
      console.log("create hit");
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
    } else if (data.action == "read") {
      console.log("read hit");
      db.query(`select * from registration`, [], (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      });
    } else if (data.action == "readid") {
      console.log("readid hit");
      db.query(
        `select * from registration where id =?`,
        [data.id],
        (error, results, fields) => {
          if (error) {
            return callback(error);
          }
          return callback(null, results);
        }
      );
    } else if (data.action == "update") {
      console.log("update hit");
      db.query(
        `update registration set firstName=?, lastName=?, gender=?, email=?, passkey=?, phone=? where id=?`,
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
    } else if (data.action == "delete") {
      console.log("delete hit");
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
    }

    // else{
    //   return()
    // }
  },
};
