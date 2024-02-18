import { useEffect, useState } from "react";
import { getPersonas } from "../services/persona";
import IPersona from "../models/IPersona";

export default function usePersonas() {
  const [personas, setPersonas] = useState<IPersona[]>([]);

  const fetchPersonas = async () => {
    const personas = await getPersonas();
    setPersonas(personas);
  };

  useEffect(() => {
    fetchPersonas();
  }, []);

  return { personas, setPersonas };
}