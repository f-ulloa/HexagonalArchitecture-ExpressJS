export class LocationRepository {
  async create(
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    throw new Error("This method must be overwritten");
  }

  async findAll() {
    throw new Error("This method must be overwritten");
  }

  async update(
    id,
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    throw new Error("This method must be overwritten");
  }

  async delete(id) {
    const query = `DELETE FROM locations WHERE id = ?`;
  }
}
