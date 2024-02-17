import { executeQuery } from "../config/database.js";
import Habitacion from "../schemas/habitacion.js";

export const getHabitaciones = async () => {
  const [results] = await executeQuery("select * from `habitacion`");
  const habitaciones = results.map((result) => Habitacion.fromJson(result));

  return habitaciones;
};

export const getHabitacionById = async (id) => {
  const [results] = await executeQuery(
    "select * from `habitacion` where id = ?",
    [id]
  );

  if (results.length != 1) {
    throw Error("can't get habitacion");
  }

  const habitacion = Habitacion.fromJson(results[0]);
  return habitacion;
};

export const addHabitacion = async (newHabitacion) => {
  const newHabitacionValues = Object.values(newHabitacion).splice(1);

  const [results] = await executeQuery(
    `
      INSERT INTO habitacion (habitacionpiso, habitacionnro, cantcamas, tienetelevision, tienefrigobar)  
      VALUES  (?, ?, ?, ?, ?)
    `,
    newHabitacionValues
  );

  return results;
};

export const updateHabitacion = async (habitacion) => {
  const { id } = habitacion;
  const habitacionValues = Object.values(habitacion).splice(1);

  const [results] = await executeQuery(
    `
      UPDATE habitacion SET habitacionpiso = ?, habitacionnro = ?, cantcamas = ?, tienetelevision = ?, tienefrigobar = ?
      WHERE id = ?
    `,
    [...habitacionValues, id]
  );

  return results;
};

export const deleteHabitacion = async (id) => {
  const [results] = await executeQuery(
    `
      DELETE FROM habitacion WHERE id = ?
    `,
    [id]
  );

  return results;
};
