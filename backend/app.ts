import express from "express";
import authRouter from "./routes/authRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); 

// Rutas
app.use("/api", authRouter);

// Ruta raíz 
app.get("/", (req, res) => {
  res.send("Bienvenido al Portal de Café Aurora ☕");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
