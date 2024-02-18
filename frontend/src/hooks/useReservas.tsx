import { useEffect, useState } from "react";
import IReserva from "../models/IReserva";
import { getReservas } from "../services/reserva";

export default function useReservas() {
  const [reservas, setReservas] = useState<IReserva[]>([]);

  const fetchReservas = async () => {
    const reservas = await getReservas();
    setReservas(reservas);
  };

  useEffect(() => {
    fetchReservas();
  }, []);

  return { reservas, setReservas };
}
