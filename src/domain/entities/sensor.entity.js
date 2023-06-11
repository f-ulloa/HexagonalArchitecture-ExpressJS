class Sensor {
  constructor(
    location_id,
    sensor_id,
    sensor_name,
    sensor_category,
    sensor_meta,
    sensor_api_key
  ) {
    this.location_id = location_id;
    this.sensor_id = sensor_id;
    this.sensor_name = sensor_name;
    this.sensor_category = sensor_category;
    this.sensor_meta = sensor_meta;
    this.sensor_api_key = sensor_api_key;
  }
}

export default Sensor;
