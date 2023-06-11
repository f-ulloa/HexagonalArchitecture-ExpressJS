import sensorDataService from "../../aplication/services/sensor-data.service.js";
import sensorDataRepositoryImpl from "../../infrastructure/repositories/sensor-data.repository.impl.js";
import authService from "../../aplication/services/auth.service.js";
import adminRepositoryImpl from "../../infrastructure/repositories/admin.repository.impl.js";
import locationService from "../../aplication/services/location.service.js";
import locationRepositoryImpl from "../../infrastructure/repositories/location.repository.impl.js";
import sensorService from "../../aplication/services/sensor.service.js";
import sensorRepositoryImpl from "../../infrastructure/repositories/sensor.repository.impl.js";
import companyService from "../../aplication/services/company.service.js";
import companyRepositoryImpl from "../../infrastructure/repositories/company.repository.impl.js";

const SensorDataRepository = new sensorDataRepositoryImpl();
const SensorDataService = new sensorDataService(SensorDataRepository);

const AdminRepository = new adminRepositoryImpl();
const AuthService = new authService(AdminRepository);

const LocationRepository = new locationRepositoryImpl();
const LocationService = new locationService(LocationRepository);

const SensorRepository = new sensorRepositoryImpl();
const SensorService = new sensorService(SensorRepository);

const CompanyRepository = new companyRepositoryImpl();
const CompanyService = new companyService(CompanyRepository);

export {
  SensorDataService,
  AuthService,
  LocationService,
  SensorService,
  CompanyService,
};
