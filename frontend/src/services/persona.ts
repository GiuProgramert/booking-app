import IPersona from "../models/IPersona";

const apiUrl = import.meta.env.VITE_API_URL;

export const getPersonas = async () => {
  const response = await fetch(`${apiUrl}/persona`);
  return await response.json();
};

export const createPersona = async (persona: IPersona) => {
  await fetch(`${apiUrl}/persona`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombrecompleto: persona.nombrecompleto,
      nrodocumento: persona.nrodocumento,
      correo: persona.correo,
      telefono: persona.telefono,
    }),
  });
};

export const updatePersona = async (persona: IPersona) => {
  await fetch(`${apiUrl}/persona/${persona.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombrecompleto: persona.nombrecompleto,
      nrodocumento: persona.nrodocumento,
      correo: persona.correo,
      telefono: persona.telefono,
    }),
  });
};

export const deletePersona = async (id: number) => {
  await fetch(`${apiUrl}/persona/${id}`, {
    method: "DELETE",
  });
};
