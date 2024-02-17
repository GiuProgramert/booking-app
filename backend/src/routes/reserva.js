import { Router } from "express";
import { addReserva, getReservaById, getReservas, isHabitacionFree } from "../services/reserva.js";
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

    if (!isHabitacionFree(
      newReserva.habitacionid,
      newReserva.fechaentrada,
      newReserva.fechasalida
    )) {
      throw new Error("habitacion not free");
    }

    const today = new Date();
    if (newReserva.fechaentrada > today) {
      throw new Error("fechaentrada must be greater that today");
    }

    if (newReserva.fechaentrada > newReserva.fechasalida) {
      throw new Error("fechasalida must be greater tha fechaentrada");
    }

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
  const {
    fechareserva,
    fechaentrada,
    fechasalida,
    habitacionid,
    personaid,
  } = req.body;
  const { id } = req.params;

  const reserva = await getReservaById(id)

  if (fechareserva) {
    reserva.fechareserva = fechareserva;
  }

  if (fechaentrada) {
  }
  if (fechasalida) {
  }

  if (habitacionid) {
  }
  if (personaid) {
  }

});
reservaRouter.delete("/:id", (req, res) => { });

export default reservaRouter;
