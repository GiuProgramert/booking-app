import { executeQuery } from "../config/database.js";
import Persona from "../schemas/persona.js";

/**
 * Get Personas in DB
 * @returns Array of Persona
 */
export const getPersonas = async () => {
  const [results] = await executeQuery("select * from `persona`");
  const personas = results.map((result) => Persona.fromJson(result));

  return personas;
};

/**
 * Get Personas in DB by id
 * @returns Persona
 */
export const getPersonaById = async (id) => {
  const [results] = await executeQuery("select * from `persona` where id = ?", [
    id,
  ]);

  if (results.length != 1) {
    throw Error("can't get persona");
  }

  const persona = Persona.fromJson(results[0]);
  return persona;
};

/**
 * Add a new persona in the DB
 * @param {Persona} persona new persona to add
 */
export const addPersona = async (newPersona) => {
  const newPersonaValues = Object.values(newPersona).splice(1);

  const [results] = await executeQuery(
    `
    INSERT INTO persona (nombrecompleto, nrodocumento, correo, telefono)  
    VALUES  (?, ?, ?, ?)
  `,
    newPersonaValues
  );

  return results;
};

export const updatePersona = async (persona) => {
  const { id } = persona;
  const personaValues = Object.values(persona).splice(1);

  const [results] = await executeQuery(
    `
    UPDATE persona set nombrecompleto = ?, nrodocumento = ?, correo = ?, telefono = ?  
    WHERE id = ?
  `,
    [...personaValues, id]
  );

  return results
};

export const deletePersona = async (id) => {
  const [results] = await executeQuery(
    `
    DELETE FROM persona WHERE id = ?
  `,
    [id]
  );

  return results
}
