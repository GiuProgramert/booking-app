import { Router } from "express";
import {
  addHabitacion,
  deleteHabitacion,
  getHabitacionById,
  getHabitaciones,
  updateHabitacion,
} from "../services/habitacion.js";
import Habitacion from "../schemas/habitacion.js";
const habitacionRouter = Router();

habitacionRouter.get("", async (req, res) => {
  try {
    const habitaciones = await getHabitaciones();
    return res.status(200).json(habitaciones);
  } catch (err) {
    return res.status(500).send(err);
  }
});

habitacionRouter.post("", async (req, res) => {
  const {
    habitacionpiso,
    habitacionnro,
    cantcamas,
    tienetelevision,
    tienefrigobar,
  } = req.body;

  try {
    if (
      !habitacionpiso ||
      !habitacionnro ||
      !cantcamas ||
      tienetelevision === undefined ||
      tienefrigobar === undefined
    )
      return res.status(400).json({ message: "Algunos campos son requeridos" });

    if (
      typeof tienetelevision !== "boolean" ||
      typeof tienefrigobar !== "boolean" ||
      typeof habitacionpiso !== "number" ||
      typeof habitacionnro !== "number" ||
      typeof cantcamas !== "number"
    ) {
      return res.status(400).json({ message: "Tipo de Dato Invalido" });
    }

    if (habitacionpiso < 0 || habitacionpiso > 10)
      return res
        .status(400)
        .json({ message: "El piso debe ser entre 0 a 10" });

    if (habitacionnro < 0 || habitacionnro > 20)
      return res
        .status(400)
        .json({ message: "El número deber ser entre 0 a 20" });

    if (cantcamas < 0 || cantcamas > 4)
      return res
        .status(400)
        .json({ message: "La cantidad de camas debe ser entre 0 a 4" });

    const newHabitacion = new Habitacion(
      null,
      habitacionpiso,
      habitacionnro,
      cantcamas,
      Number(tienetelevision),
      Number(tienefrigobar)
    );

    await addHabitacion(newHabitacion);
    return res.status(204).send("");
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});
habitacionRouter.put("/:id", async (req, res) => {
  const {
    habitacionpiso,
    habitacionnro,
    cantcamas,
    tienetelevision,
    tienefrigobar,
  } = req.body;

  const { id } = req.params;

  try {
    const habitacion = await getHabitacionById(id);

    if (
      (tienetelevision && typeof tienetelevision !== "boolean") ||
      (tienefrigobar && typeof tienefrigobar !== "boolean") ||
      (habitacionpiso && typeof habitacionpiso !== "number") ||
      (habitacionnro && typeof habitacionnro !== "number") ||
      (cantcamas && typeof cantcamas !== "number")
    ) {
      return res.status(400).json({ message: "Tipo de Dato Invalido" });
    }

    if (habitacionpiso < 0 || habitacionpiso > 10)
      return res
        .status(400)
        .json({ message: "El piso debe ser entre 0 a 10" });

    if (habitacionnro < 0 || habitacionnro > 20)
      return res
        .status(400)
        .json({ message: "El número deber ser entre 0 a 20" });

    if (cantcamas < 0 || cantcamas > 4)
      return res
        .status(400)
        .json({ message: "La cantidad de camas debe ser entre 0 a 4" });

    if (habitacionpiso) {
      habitacion.habitacionpiso = habitacionpiso;
    }

    if (habitacionnro) {
      habitacion.habitacionnro = habitacionnro;
    }

    if (cantcamas) {
      habitacion.cantcamas = cantcamas;
    }

    if (tienetelevision) {
      habitacion.tienetelevision = Number(tienetelevision);
    }

    if (tienefrigobar) {
      habitacion.tienefrigobar = Number(tienetelevision);
    }

    await updateHabitacion(habitacion);
    return res.status(200).json(habitacion);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: err });
  }
});
habitacionRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deleteHabitacion(id);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default habitacionRouter;
