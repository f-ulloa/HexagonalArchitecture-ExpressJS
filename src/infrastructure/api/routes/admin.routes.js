import express from "express";
import auth from "../middleware/auth.middleware.js";
import AuthController from "../controllers/auth.controller.js";
import AdminController from "../controllers/admin.controller.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Authentication
 *     description: User authentication endpoints
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Successfully logged in
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Unauthorized, invalid login credentials
 *       500:
 *         description: Server error
 */
router.post("/login", AuthController.login);

/**
 * @swagger
 * /secret:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Access a secret resource
 *     tags: [Authentication]
 *     responses:
 *       200:
 *         description: Access allowed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       401:
 *         description: Unauthorized, no or invalid token provided
 *       500:
 *         description: Server error
 */
router.get("/secret", auth, (req, res) => {
  res.status(200).json({ message: "¡Acceso permitido!" });
});

/**
 * @swagger
 * tags:
 *   - name: Admin
 *     description: Admin endpoints
 */

/**
 * @swagger
 * /company:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new company
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: companyName
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Company successfully created
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.post("/company", auth, AdminController.createCompany);

/**
 * @swagger
 * /companies:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of companies
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of companies
 *       500:
 *         description: Server error
 */
router.get("/companies", auth, AdminController.getCompanies);

/**
 * @swagger
 * /company:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a company
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: company
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             companyId:
 *               type: string
 *             companyName:
 *               type: string
 *             companyApiKey:
 *               type: string
 *     responses:
 *       200:
 *         description: Company successfully updated
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.put("/company", auth, AdminController.updateCompany);

/**
 * @swagger
 * /company:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a company
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: companyId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Company successfully deleted
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
/**
 * @swagger
 * /location:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new location
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: location
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             companyId:
 *               type: string
 *             locationName:
 *               type: string
 *             locationCountry:
 *               type: string
 *             locationCity:
 *               type: string
 *             locationMeta:
 *               type: string
 *     responses:
 *       201:
 *         description: Location successfully created
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.post("/location", auth, AdminController.createLocation);

/**
 * @swagger
 * /locations:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of locations
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of locations
 *       500:
 *         description: Server error
 */
router.get("/locations", auth, AdminController.getLocations);

/**
 * @swagger
 * /location:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a location
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: location
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             locationId:
 *               type: string
 *             companyId:
 *               type: string
 *             locationName:
 *               type: string
 *             locationCountry:
 *               type: string
 *             locationCity:
 *               type: string
 *             locationMeta:
 *               type: string
 *     responses:
 *       200:
 *         description: Location successfully updated
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.put("/location", auth, AdminController.updateLocation);

/**
 * @swagger
 * /location:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a location
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: locationId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Location successfully deleted
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.delete("/location", auth, AdminController.deleteLocation);

/**
 * @swagger
 * /sensor:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new sensor
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: sensor
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             locationId:
 *               type: string
 *             sensorName:
 *               type: string
 *             sensorCategory:
 *               type: string
 *             sensorMeta:
 *               type: string
 *     responses:
 *       201:
 *         description: Sensor successfully created
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.post("/sensor", auth, AdminController.createSensor);

/**
 * @swagger
 * /sensors:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of sensors
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: List of sensors
 *       500:
 *         description: Server error
 */
router.get("/sensors", auth, AdminController.getSensors);

/**
 * @swagger
 * /sensor:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a sensor
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: sensor
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             sensorId:
 *               type: string
 *             locationId:
 *               type: string
 *             sensorName:
 *               type: string
 *             sensorCategory:
 *               type: string
 *             sensorMeta:
 *               type: string
 *             sensorApiKey:
 *               type: string
 *     responses:
 *       200:
 *         description: Sensor successfully updated
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.put("/sensor", auth, AdminController.updateSensor);

/**
 * @swagger
 * /sensor:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a sensor
 *     tags: [Admin]
 *     parameters:
 *       - in: body
 *         name: sensorId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sensor successfully deleted
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */
router.delete("/sensor", auth, AdminController.deleteSensor);

export default router;
