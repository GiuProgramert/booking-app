import { Router } from "express";
const personaRouter = Router();

personaRouter.get("", (req, res) => {
  res.send('test');
});

personaRouter.post("", (req, res) => {});

personaRouter.put("/:id", (req, res) => {});

personaRouter.delete("/:id", (req, res) => {});

export default personaRouter;
