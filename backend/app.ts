import express from "express";
import authRouter from "./routes/authRoutes";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: "http://localhost:3001",
    credentials: true
}));

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
