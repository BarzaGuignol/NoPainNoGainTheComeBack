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

  bookingSummary(id) {
    return this.connection.query(
      `SELECT booking.departure_date, booking.arrival_date, vehicle.picture, vehicle.model, users.firstname, users.lastname
      FROM ${this.table}
      INNER JOIN vehicle ON booking.id_vehicle = vehicle.id
      INNER JOIN users ON booking.id_users = users.id
      WHERE booking.id = ?`,
      [id]
    );
  }
}
module.exports = BookingManager;
