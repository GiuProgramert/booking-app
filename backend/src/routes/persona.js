import { Router } from "express";
import { getPersonas } from "../services/persona.js";
const personaRouter = Router();

personaRouter.get("", async (req, res) => {
  const personas = getPersonas();
  res.send(personas);
});

personaRouter.post("", (req, res) => {});

personaRouter.put("/:id", (req, res) => {});

personaRouter.delete("/:id", (req, res) => {});

export default personaRouter;
