import { isHabitacionFree } from "../services/reserva.js";

class ReservaController {
  /**
   * Validate Reserva object
   * @param {Reserva} reservas
   */
  static validate(reserva) {
    if (
      !isHabitacionFree(
        reserva.habitacionid,
        reserva.fechaentrada,
        reserva.fechasalida
      )
    ) {
      throw new Error("habitacion not free");
    }

    const today = new Date();
    if (reserva.fechaentrada > today) {
      throw new Error("fechaentrada must be greater that today");
    }

    if (reserva.fechaentrada > reserva.fechasalida) {
      throw new Error("fechasalida must be greater tha fechaentrada");
    }
  }
}

export default ReservaController;
