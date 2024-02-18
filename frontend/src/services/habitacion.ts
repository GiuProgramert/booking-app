import IHabitacion from "../models/IHabitacion";

const apiUrl = import.meta.env.VITE_API_URL;

export const getHabitaciones = async () => {
  try {
    const response = await fetch(`${apiUrl}/habitacion`);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createHabitacion = async (habitacion: IHabitacion) => {
  try {
    const result = await fetch(`${apiUrl}/habitacion`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habitacionpiso: habitacion.habitacionpiso,
        habitacionnro: habitacion.habitacionnro,
        cantcamas: habitacion.cantcamas,
        tienetelevision: habitacion.tienetelevision === 1,
        tienefrigobar: habitacion.tienefrigobar === 1,
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

export const updateHabitacion = async (habitacion: IHabitacion) => {
  try {
    const result = await fetch(`${apiUrl}/habitacion/${habitacion.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        habitacionpiso: habitacion.habitacionpiso,
        habitacionnro: habitacion.habitacionnro,
        cantcamas: habitacion.cantcamas,
        tienetelevision: habitacion.tienetelevision === 1,
        tienefrigobar: habitacion.tienefrigobar === 1,
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

export const deleteHabitacion = async (id: number) => {
  try {
    const result = await fetch(`${apiUrl}/habitacion/${id}`, {
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
