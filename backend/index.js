import express from "express";
import personaRouter from "./src/routes/persona.js";
import habitacionRouter from "./src/routes/habitacion.js";
import reservaRouter from "./src/routes/reserva.js";

const app = express();
const port = 3000;

app.use(express.json())

app.use("/persona", personaRouter);
app.use("/habitacion", habitacionRouter);
app.use("/reserva", reservaRouter);

app.get("/", async (req, res) => {
  res.send("Booking-App Running");
});

app.listen(port, () => {
  console.log(`app Running on port ${port}`);
});
