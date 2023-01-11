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

  findDate() {
    return this.connection.query(`
    SELECT v.id, v.model, v.kilometer, v.picture, v.type, v.vehicle_year
    FROM vehicle v
    LEFT JOIN booking b ON v.id = b.id_vehicle
    AND (b.departure_date BETWEEN '2023-01-01' AND '2023-01-07'
     OR b.arrival_date BETWEEN '2023-01-01' AND '2023-01-07')
    WHERE b.id IS NULL;
    `);
  }
}

module.exports = VehicleManager;
