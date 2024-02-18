import { isHabitacionFree } from "../services/reserva.js";

class ReservaController {
  /**
   * Validate Reserva object
   * @param {Reserva} reservas
   */
  static async validate(reserva) {
    const isFree = await isHabitacionFree(
      reserva.id,
      reserva.habitacionid,
      reserva.fechaentrada,
      reserva.fechasalida
    );

    if (!isFree) {
      throw new Error("La habitacion no esta libre en esas fechas");
    }

    const today = new Date();
    if (new Date(reserva.fechaentrada) < today) {
      throw new Error("La fecha de entrada debe ser mayor a la fecha actual");
    }

    if (reserva.fechaentrada > reserva.fechasalida) {
      throw new Error("La fecha de salida debe ser mayor a la fecha de entrada");
    }
  }
}

export default ReservaController;
