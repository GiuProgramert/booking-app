import useHabitaciones from "../hooks/useHabitaciones";
import usePersonas from "../hooks/usePersonas";
import useReservas from "../hooks/useReservas";

export default function ReservaController() {
  const { reservas, setReservas } = useReservas();
  const { personas } = usePersonas();
  const { habitaciones } = useHabitaciones();

  const getPersona = (id: number) => {
    return personas.find((p) => p.id === id);
  }

  const getHabitacion = (id: number) => {
    return habitaciones.find((h) => h.id === id);
  }

  return {
    reservas,
    getPersona,
    getHabitacion,
    setReservas,
  };
}
