import { validateRequiredParams } from "../../../domain/utils/validateParams.js";
import { AuthService } from "../container.js";

class AuthController {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      validateRequiredParams(req.body, ["username", "password"]);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }

    try {
      const token = await AuthService.loginAdmin(username, password);
      return res.status(200).json({
        message: "Auth successful",
        token,
      });
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }
}

export default new AuthController();
