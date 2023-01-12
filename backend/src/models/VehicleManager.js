/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  insert(vehicle) {
    return this.connection.query(
      `insert into ${this.table} (model, kilometer, picture, type, vehicle_year, vehicle_status) values (?, ?, ?, ?, ?, ?)`,
      [
        vehicle.model,
        vehicle.kilometer,
        vehicle.picture,
        vehicle.type,
        vehicle.vehicle_year,
        vehicle.vehicle_status,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `update ${this.table} set model = ?, kilometer = ?, picture = ?, type = ?, vehicle_year = ?, vehicle_status = ? where id = ?`,
      [
        vehicle.model,
        vehicle.kilometer,
        vehicle.picture,
        vehicle.type,
        vehicle.vehicle_year,
        vehicle.vehicle_status,
        vehicle.id,
      ]
    );
  }

  findDate(departure_date, arrival_date) {
    return this.connection.query(
      `
      SELECT v.id, v.model, v.kilometer, v.picture, v.type, v.vehicle_year
      FROM vehicle v
      LEFT OUTER JOIN booking b ON v.id = b.id_vehicle
      WHERE NOT EXISTS (
        SELECT * FROM booking WHERE id_vehicle = v.id
        AND (? BETWEEN departure_date AND arrival_date
        OR ? BETWEEN departure_date AND arrival_date)
    )
  `,
      [departure_date, arrival_date]
    );
  }
}

module.exports = VehicleManager;
