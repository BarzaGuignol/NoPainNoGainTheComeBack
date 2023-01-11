const AbstractManager = require("./AbstractManager");

class BookingManager extends AbstractManager {
  constructor() {
    super({ table: "booking" });
  }

  insert(booking) {
    return this.connection.query(
      `insert into ${this.table} (id_users, id_vehicle, departure_date, arrival_date) values ( ?, ?, ?, ?)`,
      [
        booking.id_users,
        booking.id_vehicle,
        booking.departure_date,
        booking.arrival_date,
      ]
    );
  }
}
module.exports = BookingManager;
