import Sensor from "../../domain/entities/sensor.entity.js";
import { SensorRepository } from "../../domain/repositories/sensor.repository.js";
import db from "../db/database.js";

export default class SensorRepositoryImpl extends SensorRepository {
  async create(
    locationId,
    sensorName,
    sensorCategory,
    sensorMeta,
    sensorApiKey
  ) {
    const query = `INSERT INTO sensors (location_id, sensor_name, sensor_category, sensor_meta, sensor_api_key) VALUES (?, ?, ?, ?, ?)`;

    let result;
    try {
      result = await db.run(query, [
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta,
        sensorApiKey,
      ]);
    } catch (error) {
      throw new Error("Could not create sensor: " + error.message);
    }

    const sensorId = result.lastID;
    return new Sensor(
      sensorId,
      locationId,
      sensorName,
      sensorCategory,
      sensorMeta,
      sensorApiKey
    );
  }

  async findAll() {
    const query = `SELECT * FROM sensors`;

    let rows;
    try {
      rows = await db.all(query);
    } catch (error) {
      throw new Error("Could not get sensors: " + error.message);
    }

    return rows.map(
      (row) =>
        new Sensor(
          row.sensor_id,
          row.location_id,
          row.sensor_name,
          row.sensor_category,
          row.sensor_meta,
          row.sensor_api_key
        )
    );
  }

  async findById(sensorId) {
    const query = `SELECT * FROM sensors where sensor_id = ? `;

    try {
      return await db.all(query, [sensorId]);
    } catch (error) {
      throw new Error("Could not get sensor: " + error.message);
    }
  }

  async update(sensorId, locationId, sensorName, sensorCategory, sensorMeta) {
    const query = `UPDATE sensors SET location_id = ?, sensor_name = ?, sensor_category = ?, sensor_meta = ? WHERE sensor_id = ?`;

    try {
      return await db.run(query, [
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta,
        sensorId,
      ]);
    } catch (error) {
      throw new Error("Could not update sensor: " + error.message);
    }
  }

  async delete(sensorId) {
    const query = `DELETE FROM sensors WHERE sensor_id = ?`;
    try {
      await db.run(query, [sensorId]);
    } catch (error) {
      throw new Error("Could not delete sensor: " + error.message);
    }
  }
}
