import { Router } from "express";
import {
  addPersona,
  deletePersona,
  getPersonaById,
  getPersonas,
  updatePersona,
} from "../services/persona.js";
import Persona from "../schemas/persona.js";
const personaRouter = Router();

personaRouter.get("", async (req, res) => {
  try {
    const personas = await getPersonas();
    return res.status(200).json(personas);
  } catch (err) {
    return res.status(500).send(err);
  }
});

personaRouter.post("", async (req, res) => {
  const { nombrecompleto, nrodocumento, correo, telefono } = req.body;

  if (!nombrecompleto || !nrodocumento) {
    return res
      .status(400)
      .json({ message: "nombrecompleto or nrodocumento can't be null" });
  }

  const newPersona = new Persona(
    null,
    nombrecompleto,
    nrodocumento,
    correo,
    telefono
  );

  try {
    await addPersona(newPersona);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).send(err);
  }
});

personaRouter.put("/:id", async (req, res) => {
  const { nombrecompleto, nrodocumento, correo, telefono } = req.body;
  const { id } = req.params;

  const persona = await getPersonaById(id);

  if (nombrecompleto) {
    persona.nombrecompleto = nombrecompleto;
  }

  if (nrodocumento) {
    persona.nrodocumento = nrodocumento;
  }

  if (correo) {
    persona.correo = correo;
  }

  if (telefono) {
    persona.telefono = telefono;
  }

  try {
    await updatePersona(persona);
    return res.status(200).json(persona);
  } catch (err) {
    return res.status(500).send(err);
  }
});

personaRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await deletePersona(id);
    return res.status(204).send("");
  } catch (err) {
    return res.status(500).send(err);
  }
});

export default personaRouter;
