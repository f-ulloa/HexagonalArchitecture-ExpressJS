class Location {
  constructor(
    location_id,
    company_id,
    location_name,
    location_country,
    location_city,
    location_meta
  ) {
    this.location_id = location_id;
    this.company_id = company_id;
    this.location_name = location_name;
    this.location_country = location_country;
    this.location_city = location_city;
    this.location_meta = location_meta;
  }
}

export default Location;
