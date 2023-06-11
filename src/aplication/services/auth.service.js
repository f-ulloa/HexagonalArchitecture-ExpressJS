import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export default class AuthService {
  constructor(adminRepository) {
    this.adminRepository = adminRepository;
  }

  async loginAdmin(username, password) {
    let admin;

    try {
      admin = await this.adminRepository.findByUsername(username);
      if (!admin || !admin?.password) {
        throw new Error("Admin not found");
      }
    } catch (error) {
      throw new Error("Error in Admin search: " + error.message);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const isPasswordMatch = bcrypt.compareSync(admin.password, hashedPassword);

    if (isPasswordMatch) {
      throw new Error("Error in Admin login: Invalid password");
    }

    const token = jwt.sign({ username: admin.username }, "YOUR_SECRET_KEY", {
      expiresIn: "1h",
    });
    return token;
  }
}
