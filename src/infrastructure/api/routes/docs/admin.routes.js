/**
 * @swagger
 * tags:
 *   - name: Admin /api/v1/admin
 *     description: Admin endpoints
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Admin /api/v1/admin]
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
 *         description: Auth successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Admin not found | Error in Admin search | Error in Admin login Invalid password
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /company:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new company
 *     tags: [Admin /api/v1/admin]
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
 *       401:
 *         description: Admin not found | Error in Admin search | Error in Admin login Invalid password
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /companies:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of companies
 *     tags: [Admin /api/v1/admin]
 *     responses:
 *       200:
 *         description: List of companies
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /company:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a company by companyId
 *     tags: [Admin /api/v1/admin]
 *     parameters:
 *       - in: query
 *         name: companyId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: single Company
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /company:
 *   put:
 *     tags[Admin /api/v1/admin]
 *     summary: Update an existing company
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: company
 *         description: Company information to be updated
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             companyId:
 *               type: string
 *               description: The ID of the company to be updated
 *             companyName:
 *               type: string
 *               description: The name of the company
 *             companyApiKey:
 *               type: string
 *               description: API key associated with the company
 *     responses:
 *       200:
 *         description: Company successfully updated
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /company:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a company
 *     tags: [Admin /api/v1/admin]
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
 *     tags: [Admin /api/v1/admin]
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

/**
 * @swagger
 * /locations:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of locations
 *     tags: [Admin /api/v1/admin]
 *     responses:
 *       200:
 *         description: List of locations
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /location:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a location by locationId
 *     tags: [Admin /api/v1/admin]
 *     parameters:
 *       - in: query
 *         name: locationId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: single Location
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /location:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a location
 *     tags: [Admin /api/v1/admin]
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

/**
 * @swagger
 * /location:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a location
 *     tags: [Admin /api/v1/admin]
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

/**
 * @swagger
 * /sensor:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a new sensor
 *     tags: [Admin /api/v1/admin]
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

/**
 * @swagger
 * /sensors:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a list of sensors
 *     tags: [Admin /api/v1/admin]
 *     responses:
 *       200:
 *         description: List of sensors
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sensor:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: Retrieve a sensor by sensorId
 *     tags: [Admin /api/v1/admin]
 *     parameters:
 *       - in: query
 *         name: sensorId
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: single Sensor
 *       400:
 *         description: Missing parameters
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /sensor:
 *   put:
 *     security:
 *       - bearerAuth: []
 *     summary: Update a sensor
 *     tags: [Admin /api/v1/admin]
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

/**
 * @swagger
 * /sensor:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: Delete a sensor
 *     tags: [Admin /api/v1/admin]
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
