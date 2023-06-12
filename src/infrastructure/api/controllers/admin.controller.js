import Company from "../../../domain/entities/company.entity.js";
import { validateRequiredParams } from "../../../domain/utils/validateParams.js";
import {
  CompanyService,
  LocationService,
  SensorService,
} from "../../../infrastructure/api/container.js";

class AdminController {
  async createCompany(req, res) {
    const { companyName } = req.body;

    try {
      validateRequiredParams(req.body, ["companyName"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const company = await CompanyService.createCompany(companyName);
      return res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getCompanies(req, res) {
    try {
      const companies = await CompanyService.getCompanies();
      return res.json(companies);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getCompany(req, res) {
    const { companyId } = req.query;

    try {
      validateRequiredParams(req.query, ["companyId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const company = await CompanyService.getCompany(companyId);
      return res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateCompany(req, res) {
    const { companyId, companyName, companyApiKey } = req.body;

    const requiredParams = ["companyId", "companyName", "companyApiKey"];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const company = new Company(companyId, companyName, companyApiKey);
      await CompanyService.updateCompany(company);
      res.status(200).json({ message: "Company updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteCompany(req, res) {
    const { companyId } = req.body;

    try {
      validateRequiredParams(req.body, ["companyId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      await CompanyService.deleteCompany(companyId);
      res.status(200).json({ message: "Company deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createLocation(req, res) {
    const {
      companyId,
      locationName,
      locationCountry,
      locationCity,
      locationMeta,
    } = req.body;

    const requiredParams = [
      "companyId",
      "locationName",
      "locationCountry",
      "locationCity",
      "locationMeta",
    ];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const location = await LocationService.createLocation(
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta
      );
      res.status(201).json(location);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLocations(req, res) {
    try {
      const locations = await LocationService.getLocations();
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLocation(req, res) {
    const { locationId } = req.query;

    try {
      validateRequiredParams(req.query, ["locationId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const location = await LocationService.getLocation(locationId);
      return res.status(201).json(location);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateLocation(req, res) {
    const {
      locationId,
      companyId,
      locationName,
      locationCountry,
      locationCity,
      locationMeta,
    } = req.body;

    const requiredParams = [
      "locationId",
      "companyId",
      "locationName",
      "locationCountry",
      "locationCity",
      "locationMeta",
    ];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      await LocationService.updateLocation(
        locationId,
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta
      );
      res.status(200).json({ message: "Location updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteLocation(req, res) {
    const { locationId } = req.body;

    try {
      validateRequiredParams(req.body, ["locationId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      await LocationService.deleteLocation(locationId);
      res.status(200).json({ message: "Location deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createSensor(req, res) {
    const { locationId, sensorName, sensorCategory, sensorMeta } = req.body;

    const requiredParams = [
      "locationId",
      "sensorName",
      "sensorCategory",
      "sensorMeta",
    ];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const result = await SensorService.createSensor(
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta
      );
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSensors(req, res) {
    try {
      const sensors = await SensorService.getSensors();
      res.json(sensors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSensor(req, res) {
    const { sensorId } = req.query;

    try {
      validateRequiredParams(req.query, ["sensorId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const sensor = await SensorService.getSensor(sensorId);
      return res.status(201).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateSensor(req, res) {
    const {
      sensorId,
      locationId,
      sensorName,
      sensorCategory,
      sensorMeta,
      sensorApiKey,
    } = req.body;

    const requiredParams = [
      "sensorId",
      "locationId",
      "sensorName",
      "sensorCategory",
      "sensorMeta",
      "sensorApiKey",
    ];

    try {
      validateRequiredParams(req.body, requiredParams);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      await SensorService.updateSensor(
        sensorId,
        locationId,
        sensorName,
        sensorCategory,
        sensorMeta,
        sensorApiKey
      );
      res.status(200).json({ message: "Sensor updated" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteSensor(req, res) {
    const { sensorId } = req.body;

    try {
      validateRequiredParams(req.body, ["sensorId"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      await SensorService.deleteSensor(sensorId);
      res.status(200).json({ message: "Sensor deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default new AdminController();
