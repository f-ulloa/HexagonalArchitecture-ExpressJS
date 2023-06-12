import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/admin.routes.js";
import sensorRoutes from "./routes/sensor.routes.js";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de ejemplo",
      version: "1.0.0",
      description: "Una API creada usando Node.js, Express y sqlite",
    },
  },
  apis: ["src/infrastructure/api/routes/docs/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/sensor", sensorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
