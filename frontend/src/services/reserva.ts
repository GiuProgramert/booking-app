import IReserva from "../models/IReserva";

const apiUrl = import.meta.env.VITE_API_URL;

export const getReservas = async () => {
  const response = await fetch(`${apiUrl}/reserva`);
  return await response.json();
};

export const createReserva = async (reserva: IReserva) => {
  await fetch(`${apiUrl}/reserva`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fechareserva: reserva.fechareserva,
      fechaentrada: reserva.fechaentrada,
      fechasalida: reserva.fechasalida,
      habitacionid: reserva.habitacionid,
      personaid: reserva.personaid,
    }),
  });
};

export const updateReserva = async (reserva: IReserva) => {
  await fetch(`${apiUrl}/reserva/${reserva.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      fechareserva: reserva.fechareserva,
      fechaentrada: reserva.fechaentrada,
      fechasalida: reserva.fechasalida,
      habitacionid: reserva.habitacionid,
      personaid: reserva.personaid,
    }),
  });
};

export const deleteReserva = async (id: number) => {
  await fetch(`${apiUrl}/reserva/${id}`, {
    method: "DELETE",
  });
};
