import usePersonas from "../hooks/usePersonas";

export default function PersonaController() {
  const {personas, setPersonas} = usePersonas();

  return { personas, setPersonas };
}
