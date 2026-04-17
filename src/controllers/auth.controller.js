import { registerUser, loginUser } from "../services/auth.service.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body.email, req.body.password);
    res.json(user);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const login = async (req, res) => {
  try {
    const token = await loginUser(req.body.email, req.body.password);
    res.json({ token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};