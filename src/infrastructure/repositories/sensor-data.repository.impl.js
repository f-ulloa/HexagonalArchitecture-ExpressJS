import { SensorDataRepository } from "../../domain/repositories/sensor-data.repository.js";
import db from "../db/database.js";

export default class SensorDataRepositoryImpl extends SensorDataRepository {
  async insertSensorData(sensorApiKey, data, timestamp) {
    const sensor = await db.get(
      "SELECT * FROM sensors WHERE sensor_api_key = ?",
      [sensorApiKey]
    );

    if (!sensor) {
      throw new Error("Invalid sensor API key");
    }

    return await db.run(
      "INSERT INTO sensor_data (sensor_api_key, data, timestamp) VALUES (?, ?, ?)",
      [sensorApiKey, JSON.stringify(data), timestamp]
    );
  }

  async getSensorData(companyApiKey, from, to, sensorIds) {
    const sensorData = await db.all(
      `
          SELECT sd.* FROM sensor_data sd
          JOIN sensors s ON s.sensor_api_key = sd.sensor_api_key
          JOIN locations l ON l.location_id = s.location_id
          JOIN companies c ON c.company_id = l.company_id
          WHERE c.company_api_key = ? AND s.sensor_id IN (${sensorIds.join(
            ","
          )})
          AND sd.timestamp BETWEEN ? AND ?
      `,
      [companyApiKey, from, to]
    );

    return sensorData;
  }

  async findAll() {
    try {
      return await db.all("SELECT * FROM sensor_data");
    } catch (error) {
      throw new Error("Could not get sensor_data: " + error.message);
    }
  }
}
