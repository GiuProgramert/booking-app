import { useState } from "react";
import useHabitaciones from "../hooks/useHabitaciones";
import usePersonas from "../hooks/usePersonas";
import useReservas from "../hooks/useReservas";
import IReserva from "../models/IReserva";
import {
  createReserva,
  deleteReserva,
  getReservas,
  updateReserva,
} from "../services/reserva";
import toast from "react-hot-toast";
import IError from "../models/IError";

export default function ReservaController() {
  const [selectedReserva, setSelectedReserva] = useState<
    IReserva | undefined
  >();

  const { reservas, setReservas } = useReservas();
  const { personas } = usePersonas();
  const { habitaciones } = useHabitaciones();

  const getPersona = (id: number) => {
    return personas.find((p) => p.id === id);
  };

  const getHabitacion = (id: number) => {
    return habitaciones.find((h) => h.id === id);
  };

  const handleReservaFormSubmit = async (reserva: IReserva) => {
    try {
      await createReserva(reserva);

      const reservas = await getReservas();
      setReservas(reservas);

      toast.success("Reserva creada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleUpdateReservaFormSubmit = async (reserva: IReserva) => {
    try {
      await updateReserva(reserva);

      const reservas = await getReservas();
      setReservas(reservas);
      setSelectedReserva(undefined);

      toast.success("Reserva actualizada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  const handleClickEdit = (row: IReserva) => {
    setSelectedReserva({
      ...row,
      fechareserva: row.fechareserva.substring(0, 10),
      fechaentrada: row.fechareserva.substring(0, 10),
      fechasalida: row.fechasalida.substring(0, 10),
    });
  };

  const handleClickDelete = async (id: number) => {
    try {
      await deleteReserva(id);

      const filteredReservas = reservas.filter((reserva) => reserva.id !== id);
      setReservas(filteredReservas);
      toast.success("Reserva borrada correctamente");
    } catch (err: IError | any) {
      console.error(err);
      toast.error(err.message);
    }
  };

  return {
    reservas,
    personas,
    selectedReserva,
    setSelectedReserva,
    handleUpdateReservaFormSubmit,
    handleReservaFormSubmit,
    handleClickEdit,
    handleClickDelete,
    habitaciones,
    getPersona,
    getHabitacion,
    setReservas,
  };
}
