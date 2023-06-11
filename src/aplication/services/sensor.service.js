import { v4 as uuidv4 } from "uuid";

export default class SensorService {
  constructor(sensorRepository) {
    this.sensorRepository = sensorRepository;
  }

  async createSensor(locationId, sensorName, sensorCategory, sensorMeta) {
    const sensorApiKey = uuidv4();
    try {
      return await this.sensorRepository.create(
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta,
        sensorApiKey
      );
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error creating sensor: " + error.message);
    }
  }

  async getSensors() {
    try {
      return await this.sensorRepository.findAll();
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error retrieving sensors: " + error.message);
    }
  }

  async updateSensor(
    sensorId,
    locationId,
    sensorName,
    sensorCategory,
    sensorMeta,
    sensorApiKey
  ) {
    try {
      return await this.sensorRepository.update(
        sensorId,
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta,
        sensorApiKey
      );
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error updating sensor: " + error.message);
    }
  }

  async deleteSensor(sensorId) {
    try {
      return await this.sensorRepository.delete(sensorId);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error deleting sensor: " + error.message);
    }
  }
}
