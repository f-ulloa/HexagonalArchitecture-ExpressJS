export default class SensorDataService {
  constructor(sensorDataRepository) {
    this.sensorDataRepository = sensorDataRepository;
  }

  async insertSensorData(sensorApiKey, data) {
    const timestamp = Date.now();

    try {
      await this.sensorDataRepository.insertSensorData(
        sensorApiKey,
        data,
        timestamp
      );
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error inserting sensor data: " + error.message);
    }
  }

  async getSensorData(companyApiKey, from, to, sensorIds) {
    try {
      return await this.sensorDataRepository.getSensorData(
        companyApiKey,
        from,
        to,
        sensorIds
      );
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error retrieving sensor datas: " + error.message);
    }
  }

  async getAllSensorData() {
    try {
      return await this.sensorDataRepository.findAll();
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error temp retrieving sensor datas: " + error.message);
    }
  }
}
