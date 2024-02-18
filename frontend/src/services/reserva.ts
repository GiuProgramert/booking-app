import IReserva from "../models/IReserva";

const apiUrl = import.meta.env.VITE_API_URL;

export const getReservas = async () => {
  try {
    const response = await fetch(`${apiUrl}/reserva`);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createReserva = async (reserva: IReserva) => {
  try {
    const result = await fetch(`${apiUrl}/reserva`, {
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

    if (!result.ok) {
      const resultJson = await result.json();
      throw new Error(resultJson.message);
    }
  } catch (err) {
    throw err;
  }
};

export const updateReserva = async (reserva: IReserva) => {
  try {
    const result = await fetch(`${apiUrl}/reserva/${reserva.id}`, {
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

    if (!result.ok) {
      const resultJson = await result.json();
      throw new Error(resultJson.message);
    }
  } catch (err) {
    throw err;
  }
};

export const deleteReserva = async (id: number) => {
  try {
    const result = await fetch(`${apiUrl}/reserva/${id}`, {
      method: "DELETE",
    });

    if (!result.ok) {
      const resultJson = await result.json();
      throw new Error(resultJson.message);
    }
  } catch (err) {
    throw err;
  }
};
