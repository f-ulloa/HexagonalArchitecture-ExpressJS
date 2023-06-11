export class SensorRepository {
  async create(
    locationId,
    sensorName,
    sensorCategory,
    sensorMeta,
    sensorApiKey
  ) {
    throw new Error("This method must be overwritten");
  }

  async findAll() {
    throw new Error("This method must be overwritten");
  }

  async update(sensorId, locationId, sensorName, sensorCategory, sensorMeta) {
    throw new Error("This method must be overwritten");
  }

  async delete(sensorId) {
    throw new Error("This method must be overwritten");
  }
}
