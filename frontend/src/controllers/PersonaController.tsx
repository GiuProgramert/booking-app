import { useState } from "react";
import usePersonas from "../hooks/usePersonas";
import IPersona from "../models/IPersona";
import {
  createPersona,
  deletePersona,
  getPersonas,
  updatePersona,
} from "../services/persona";

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
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdatePersonaFormSubmit = async (persona: IPersona) => {
    try {
      await updatePersona(persona);

      const personas = await getPersonas();
      setPersonas(personas);
      setSelectedPersona(undefined);
    } catch (err) {
      console.error(err);
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
    } catch (err) {
      console.error(err);
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
