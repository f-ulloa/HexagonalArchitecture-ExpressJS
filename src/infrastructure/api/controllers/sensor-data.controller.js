import { validateRequiredParams } from "../../../domain/utils/validateParams.js";
import { SensorDataService } from "../container.js";

class SensorDataController {
  async insertSensorData(req, res) {
    const { sensorApiKey, data } = req.body;

    try {
      validateRequiredParams(req.body, ["sensorApiKey", "data"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const result = await SensorDataService.insertSensorData(
        sensorApiKey,
        data
      );
      res.status(201).send(result);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error inserting sensor data: " + error.message });
    }
  }

  async getSensorData(req, res) {
    const { companyApiKey, from, to, sensorIds } = req.body;

    const requiredParams = ["companyApiKey", "from", "to", "sensorIds"];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const data = await SensorDataService.getSensorData(
        companyApiKey,
        from,
        to,
        sensorIds
      );
      res.status(200).send(data);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error fetching sensor data: " + error.message });
    }
  }

  async getAllSensorData(req, res) {
    try {
      const data = await SensorDataService.getAllSensorData();
      return res.status(200).send(data);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error fetching sensor data: " + error.message });
    }
  }
}

export default new SensorDataController();
