import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import adminRoutes from "./routes/admin.routes.js";
import sensorRoutes from "./routes/sensor.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/sensor", sensorRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
