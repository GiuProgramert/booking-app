import { useState } from "react";
import useHabitaciones from "../hooks/useHabitaciones";
import toast from "react-hot-toast";
import IHabitacion from "../models/IHabitacion";
import {
  createHabitacion,
  deleteHabitacion,
  getHabitaciones,
  updateHabitacion,
} from "../services/habitacion";
import IError from "../models/IError";

export default function HabitacionController() {
  const [selectedHabitacion, setSelectedHabitacion] = useState<
    IHabitacion | undefined
  >();
  const { habitaciones, setHabitaciones } = useHabitaciones();

  const handleHabitacionFormSubmit = async (habitacion: IHabitacion) => {
    try {
      await createHabitacion(habitacion);

      const habitaciones = await getHabitaciones();
      setHabitaciones(habitaciones);

      toast.success("Habitación creada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleUpdateHabitacionFormSubmit = async (habitacion: IHabitacion) => {
    try {
      await updateHabitacion(habitacion);

      const habitaciones = await getHabitaciones();
      setHabitaciones(habitaciones);
      setSelectedHabitacion(undefined);

      toast.success("Habitación actualizada correctamente");
    } catch (err: IError | any) {
      console.error({err});
      toast.error(err.message);
    }
  };

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
      toast.success("Habitación borrada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
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
