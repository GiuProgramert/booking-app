import { useState } from "react";
import useHabitaciones from "../hooks/useHabitaciones";
import IHabitacion from "../models/IHabitacion";
import {
  createHabitacion,
  deleteHabitacion,
  getHabitaciones,
  updateHabitacion,
} from "../services/habitacion";

export default function HabitacionController() {
  const [selectedHabitacion, setSelectedHabitacion] = useState<
    IHabitacion | undefined
  >();
  const { habitaciones, setHabitaciones } = useHabitaciones();

  const handleHabitacionFormSubmit = async (habitacion: IHabitacion) => {
    try {
      await createHabitacion(habitacion);

      const habitaciones = await getHabitaciones();
      console.log(habitaciones);
      setHabitaciones(habitaciones);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateHabitacionFormSubmit = async (habitacion: IHabitacion) => {
    try {
      await updateHabitacion(habitacion);

      const habitaciones = await getHabitaciones();
      setHabitaciones(habitaciones);
      setSelectedHabitacion(undefined);
    } catch (err) {
      console.error(err);
    }
  }

  const handleClickEdit = (row: IHabitacion) => {
    setSelectedHabitacion(row);
  };

  const handleClickDelete = async (id: number) => {
    try {
      await deleteHabitacion(id);

      const filteredHabitaciones = habitaciones.filter(
        (habitacion) => habitacion.id !== id
      );
      setHabitaciones(filteredHabitaciones);
    } catch (err) {
      console.error(err);
    }
  };

  return {
    habitaciones,
    setHabitaciones,
    selectedHabitacion,
    setSelectedHabitacion,
    handleUpdateHabitacionFormSubmit,
    handleHabitacionFormSubmit,
    handleClickEdit,
    handleClickDelete,
  };
}
