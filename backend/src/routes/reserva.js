import { Router } from "express";
import { addReserva, getReservas } from "../services/reserva.js";
import Reserva from "../schemas/reserva.js";
import getDaysBetweenDates from "../helpers/getDaysBetweenDates.js";

const reservaRouter = Router();

reservaRouter.get("", async (req, res) => {
  try {
    const reservas = await getReservas();
    return res.status(200).json(reservas);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

reservaRouter.post("", async (req, res) => {
  const { fechareserva, fechaentrada, fechasalida, habitacionid, personaid } =
    req.body;

  const newReserva = Reserva(
    null,
    fechareserva,
    fechaentrada,
    fechasalida,
    habitacionid,
    personaid,
    0
  );

  const diffDays = getDaysBetweenDates(
    newReserva.fechaentrada,
    newReserva.fechasalida
  );

  newReserva.montoreserva = diffDays * 120000;

  try {
    await addReserva(newReserva);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
reservaRouter.put("/:id", (req, res) => {
  const {
    fechareserva,
    fechaentrada,
    fechasalida,
    habitacionid,
    personaid,
    montoreserva,
  } = req.body;

  if (fechareserva) {
  }
  if (fechaentrada) {
  }
  if (fechasalida) {
  }
  if (habitacionid) {
  }
  if (personaid) {
  }
  if (montoreserva) {
  }
});
reservaRouter.delete("/:id", (req, res) => {});

export default reservaRouter;
