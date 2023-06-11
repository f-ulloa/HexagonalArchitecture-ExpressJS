import Location from "../../domain/entities/location.entity.js";
import db from "../db/database.js";
import { LocationRepository } from "../../domain/repositories/location.repository.js";

export default class LocationRepositoryImpl extends LocationRepository {
  async create(
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    const query = `INSERT INTO locations (company_id, location_name, location_country, location_city, location_meta) VALUES (?, ?, ?, ?, ?)`;

    let result;
    try {
      result = await db.run(query, [
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta,
      ]);
    } catch (error) {
      throw new Error("Could not create location: " + error.message);
    }

    const locationId = result.lastID;
    return new Location(
      locationId,
      companyId,
      locationName,
      locationCountry,
      locationCity,
      locationMeta
    );
  }

  async findAll() {
    const query = `SELECT * FROM locations`;

    let rows;
    try {
      rows = await db.all(query);
    } catch (error) {
      throw new Error("Could not get locations: " + error.message);
    }
    return rows.map(
      (row) =>
        new Location(
          row.location_id,
          row.company_id,
          row.location_name,
          row.location_country,
          row.location_city,
          row.location_meta
        )
    );
  }

  async update(
    locationId,
    companyId,
    locationName,
    locationCountry,
    locationCity,
    locationMeta
  ) {
    const query = `UPDATE locations SET company_id = ?, location_name = ?, location_country = ?, location_city = ?, location_meta = ? WHERE location_id = ?`;

    try {
      await db.run(query, [
        companyId,
        locationName,
        locationCountry,
        locationCity,
        locationMeta,
        locationId,
      ]);
    } catch (error) {
      throw new Error("Could not update location: " + error.message);
    }
  }

  async delete(locationId) {
    const query = `DELETE FROM locations WHERE location_id = ?`;

    try {
      await db.run(query, [locationId]);
    } catch (error) {
      throw new Error("Could not delete location: " + error.message);
    }
  }
}
