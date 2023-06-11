export class SensorDataRepository {
  async insertSensorData(sensorApiKey, data, timestamp) {
    throw new Error("This method must be overwritten");
  }

  async getSensorData(companyApiKey, from, to, sensorIds) {
    throw new Error("This method must be overwritten");
  }

  async findAll() {
    throw new Error("This method must be overwritten");
  }
}
