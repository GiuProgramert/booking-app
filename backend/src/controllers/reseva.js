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
