import express from "express";
import SensorDataController from "../controllers/sensor-data.controller.js";

const router = express.Router();

router.get("/sensorData/temp", SensorDataController.getAllSensorData);

router.get("/sensorData", SensorDataController.getSensorData);
router.post("/sensorData", SensorDataController.insertSensorData);

export default router;
