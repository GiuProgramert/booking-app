import IPersona from "../models/IPersona";

const apiUrl = import.meta.env.VITE_API_URL;

export const getPersonas = async () => {
  try {
    const response = await fetch(`${apiUrl}/persona`);
    return await response.json();
  } catch (err) {
    throw err;
  }
};

export const createPersona = async (persona: IPersona) => {
  try {
    const result = await fetch(`${apiUrl}/persona`, {
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

    if (!result.ok) {
      const resultJson = await result.json();
      throw new Error(resultJson.message);
    }
  } catch (err) {
    throw err;
  }
};

export const updatePersona = async (persona: IPersona) => {
  try {
    const result = await fetch(`${apiUrl}/persona/${persona.id}`, {
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

    if (!result.ok) {
      const resultJson = await result.json();
      throw new Error(resultJson.message);
    }
  } catch (err) {
    throw err;
  }
};

export const deletePersona = async (id: number) => {
  try {
    const result = await fetch(`${apiUrl}/persona/${id}`, {
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
