/**
 * @swagger
 * tags:
 *   - name: SensorData
 *     description: Endpoints for sensor data
 */

/**
 * @swagger
 * /sensorData:
 *   post:
 *     tags:
 *       - SensorData
 *     summary: Insert sensor data
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: sensorData
 *         description: Sensor data to be inserted
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             sensorApiKey:
 *               type: string
 *             data:
 *               type: object
 *     responses:
 *       201:
 *         description: Sensor data successfully inserted
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Error inserting sensor data
 */

/**
 * @swagger
 * /sensorData:
 *   get:
 *     tags:
 *       - SensorData
 *     summary: Retrieve sensor data
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: sensorDataParams
 *         description: Parameters to filter sensor data
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             companyApiKey:
 *               type: string
 *             from:
 *               type: string
 *               format: date-time
 *             to:
 *               type: string
 *               format: date-time
 *             sensorIds:
 *               type: array
 *               items:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sensor data retrieved
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Error fetching sensor data
 */
