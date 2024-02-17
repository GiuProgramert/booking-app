import { Router } from "express";
import {
  addReserva,
  getReservaById,
  getReservas,
  updateReserva,
  deleteReserva,
} from "../services/reserva.js";
import Reserva from "../schemas/reserva.js";
import getDaysBetweenDates from "../helpers/getDaysBetweenDates.js";
import ReservaController from "../controllers/reseva.js";

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

  try {
    const newReserva = Reserva(
      null,
      fechareserva,
      fechaentrada,
      fechasalida,
      habitacionid,
      personaid,
      0
    );

    ReservaController.validate(newReserva);

    const diffDays = getDaysBetweenDates(
      newReserva.fechaentrada,
      newReserva.fechasalida
    );

    newReserva.montoreserva = diffDays * 120000;

    await addReserva(newReserva);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
reservaRouter.put("/:id", async (req, res) => {
  const { fechareserva, fechaentrada, fechasalida, habitacionid, personaid } =
    req.body;
  const { id } = req.params;

  try {
    const reserva = await getReservaById(id);

    if (fechareserva) {
      reserva.fechareserva = fechareserva;
    }

    if (fechaentrada) {
      reserva.fechaentrada = fechaentrada;
    }
    if (fechasalida) {
      reserva.fechasalida = fechasalida;
    }

    if (habitacionid) {
      reserva.habitacionid = habitacionid;
    }
    if (personaid) {
      reserva.personaid = personaid;
    }

    ReservaController.validate(reserva);

    const diffDays = getDaysBetweenDates(
      reserva.fechaentrada,
      reserva.fechasalida
    );

    reserva.montoreserva = diffDays * 120000;

    await updateReserva(reserva);
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});
reservaRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deleteReserva(id);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).json({ message: err });
  }
});

export default reservaRouter;
