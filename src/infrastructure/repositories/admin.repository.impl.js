import AdminRepository from "../../domain/repositories/admin.repository.js";
import db from "../db/database.js";

export default class AdminRepositoryImpl extends AdminRepository {
  async findByUsername(username) {
    return await db.get("SELECT * FROM admins WHERE username = ?", [username]);
  }
}
