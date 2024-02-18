const apiUrl = import.meta.env.VITE_API_URL;

export const getPersonas = async () => {
  const response = await fetch(`${apiUrl}/persona`);
  return await response.json();
}