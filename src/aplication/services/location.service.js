export default class LocationService {
  constructor(locationRepository) {
    this.locationRepository = locationRepository;
  }

  async createLocation(
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    try {
      return await this.locationRepository.create(
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta
      );
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error creating location: " + error.message);
    }
  }

  async getLocations() {
    try {
      return await this.locationRepository.findAll();
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error retrieving locations: " + error.message);
    }
  }

  async getLocation(locationId) {
    try {
      return await this.locationRepository.findById(locationId);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error retrieving location: " + error.message);
    }
  }

  async updateLocation(
    id,
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    try {
      const location = {
        id,
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta,
      };
      return await this.locationRepository.update(location);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error updating location: " + error.message);
    }
  }

  async deleteLocation(location_name) {
    try {
      return await this.locationRepository.delete(location_name);
    } catch (error) {
      //TODO: custom logger for these errors
      throw new Error("Error deleting location: " + error.message);
    }
  }
}
