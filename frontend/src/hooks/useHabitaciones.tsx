import { useEffect, useState } from "react";
import IHabitacion from "../models/IHabitacion";
import { getHabitaciones } from "../services/habitacion";

export default function useHabitaciones() {
  const [habitaciones, setHabitaciones] = useState<IHabitacion[]>([])

  const fetchHabitaciones = async () => {
    try {
      const habitaciones = await getHabitaciones();
      setHabitaciones(habitaciones);
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchHabitaciones();
  }, [])

  return {
    habitaciones,
    fetchHabitaciones,
    setHabitaciones
  }
}