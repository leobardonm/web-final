import { RequestHandler } from "express";
import { authenticateUser } from "../controllers/authController";

export const loginHandler: RequestHandler = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({ error: "Se requieren usuario y contraseña." });
    return;
  }

  const result = authenticateUser(username, password);

  if (result.success && result.data) {
    const { Name, membershipNumber } = result.data;
    res.status(200).json({
      message: `¡Hola, ${Name}! Gracias por ser parte de Café Aurora.`,
      membershipNumber: membershipNumber
    });
    return;
  } else {
    res.status(401).json({ error: result.error });
    return;
  }
};
