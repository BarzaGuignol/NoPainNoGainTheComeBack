const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(users) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, password, email, user_type) values ( ?, ?, ?, ?, ?)`,
      [
        users.firstname,
        users.lastname,
        users.password,
        users.email,
        users.user_type,
      ]
    );
  }

  findOne(user) {
    return this.connection.query(
      `select * from  ${this.table} where email = ?`,
      [user.email]
    );
  }
}
module.exports = UserManager;
