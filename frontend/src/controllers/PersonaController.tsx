import { useState } from "react";
import usePersonas from "../hooks/usePersonas";
import IPersona from "../models/IPersona";
import {
  createPersona,
  deletePersona,
  getPersonas,
  updatePersona,
} from "../services/persona";
import toast from "react-hot-toast";
import IError from "../models/IError";

export default function PersonaController() {
  const [selectedPersona, setSelectedPersona] = useState<
    IPersona | undefined
  >();
  const { personas, setPersonas } = usePersonas();

  const handlePersonaFormSubmit = async (persona: IPersona) => {
    try {
      await createPersona(persona);

      const personas = await getPersonas();
      setPersonas(personas);

      toast.success("Persona creada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleUpdatePersonaFormSubmit = async (persona: IPersona) => {
    try {
      await updatePersona(persona);

      const personas = await getPersonas();
      setPersonas(personas);
      setSelectedPersona(undefined);

      toast.success("Persona actualizada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleClickEdit = (row: IPersona) => {
    setSelectedPersona(row);
  };

  const handleClickDelete = async (id: number) => {
    try {
      await deletePersona(id);

      const filteredPersonas = personas.filter((persona) => persona.id !== id);
      setPersonas(filteredPersonas);
      toast.success("Persona borrada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return {
    personas,
    setPersonas,
    selectedPersona,
    setSelectedPersona,
    handlePersonaFormSubmit,
    handleUpdatePersonaFormSubmit,
    handleClickEdit,
    handleClickDelete,
  };
}
