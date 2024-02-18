import IHabitacion from "../models/IHabitacion";

const apiUrl = import.meta.env.VITE_API_URL;

export const getHabitaciones = async () => {
  const response = await fetch(`${apiUrl}/habitacion`);
  return await response.json();
};

export const createHabitacion = async (habitacion: IHabitacion) => {
  await fetch(`${apiUrl}/habitacion`, {
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
};

export const updateHabitacion = async (habitacion: IHabitacion) => {
  await fetch(`${apiUrl}/habitacion/${habitacion.id}`, {
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
};

export const deleteHabitacion = async (id: number) => {
  await fetch(`${apiUrl}/habitacion/${id}`, {
    method: "DELETE",
  });
}
