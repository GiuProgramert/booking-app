import { executeQuery } from "../config/database.js";
import Persona from "../schemas/persona.js";

export const getPersonas = async () => {
  const results = await executeQuery("select * from `persona`");
  console.log(results)
  const personas = results.map(result => Persona.fromJson(result));
  console.log(personas);
  return personas
}
