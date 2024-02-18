const apiUrl = import.meta.env.VITE_API_URL;

export const getReservas = async () => {
  const response = await fetch(`${apiUrl}/reserva`);
  return await response.json();
};
