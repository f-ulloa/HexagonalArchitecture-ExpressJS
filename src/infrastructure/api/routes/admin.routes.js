import express from "express";
import auth from "../middleware/auth.middleware.js";
import AuthController from "../controllers/auth.controller.js";
import AdminController from "../controllers/admin.controller.js";

const router = express.Router();

router.post("/login", AuthController.login);
router.get("/secret", auth, (req, res) => {
  res.status(200).json({ message: "¡Acceso permitido!" });
});

router.post("/company", auth, AdminController.createCompany);
router.get("/company", auth, AdminController.getCompany);
router.get("/companies", auth, AdminController.getCompanies);
router.put("/company", auth, AdminController.updateCompany);
router.delete("/company", auth, AdminController.deleteCompany);

router.post("/location", auth, AdminController.createLocation);
router.get("/locations", auth, AdminController.getLocations);
router.get("/location", auth, AdminController.getLocation);
router.put("/location", auth, AdminController.updateLocation);
router.delete("/location", auth, AdminController.deleteLocation);

router.post("/sensor", auth, AdminController.createSensor);
router.get("/sensors", auth, AdminController.getSensors);
router.get("/sensor", auth, AdminController.getSensor);
router.put("/sensor", auth, AdminController.updateSensor);
router.delete("/sensor", auth, AdminController.deleteSensor);

export default router;
