import { executeQuery } from "../config/database.js";
import getStringFromDate from "../helpers/getStringFromDate.js";
import Reserva from "../schemas/reserva.js";

const getInsertUpdateFormatReserva = (reserva) => {
  return [
    reserva.fechareserva,
    reserva.fechaentrada,
    reserva.fechasalida,
    reserva.habitacionid,
    reserva.personaid,
    reserva.montoreserva,
  ];
};

export const getReservas = async () => {
  const [results] = await executeQuery("select * from `reserva`");
  const reservas = results.map((result) => Reserva.fromJson(result));

  return reservas;
};

export const getReservaById = async (id) => {
  const [results] = await executeQuery("select * from `reserva` where id = ?", [
    id,
  ]);

  if (results.length != 1) {
    throw Error("can't get reserva");
  }

  const reserva = Reserva.fromJson(results[0]);
  return reserva;
};

export const addReserva = async (newReserva) => {
  const [results] = await executeQuery(
    `
    INSERT INTO reserva (fechareserva, fechaentrada, fechasalida, habitacionid, personaid, montoreserva)  
    VALUES  (?, ?, ?, ?, ?, ?)
  `,
    getInsertUpdateFormatReserva(newReserva)
  );

  return results;
};

export const updateReserva = async (reserva) => {
  const { id } = reserva;

  const [results] = await executeQuery(
    `
    UPDATE reserva set fechareserva = ?, fechaentrada = ?, fechasalida = ?, habitacionid = ?, personaid = ?, montoreserva = ?
    WHERE id = ?
  `,
    [...getInsertUpdateFormatReserva(reserva), id]
  );

  return results;
};

export const deleteReserva = async (id) => {
  const [results] = await executeQuery(
    `
    DELETE FROM reserva WHERE id = ?
  `,
    [id]
  );

  return results;
};

export const isHabitacionFree = async (
  id,
  habitacionid,
  fechaentrada,
  fechasalida
) => {
  const queryValues = [fechaentrada, fechasalida, habitacionid];

  if (id) {
    queryValues.push(id);
  }

  const additionalQuey = id ? "AND id != ?" : "";

  const [results] = await executeQuery(
    `
    SELECT * FROM reserva 
    WHERE 
      fechaentrada <= ? AND 
      fechasalida >= ? AND
      habitacionid = ? 
      ${additionalQuey}
  `,
    queryValues
  );

  const isFree = results.length === 0;

  return isFree;
};
