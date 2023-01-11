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
}

module.exports = VehicleManager;
