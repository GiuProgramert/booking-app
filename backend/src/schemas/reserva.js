import setDate from "../helpers/getDateFromString.js";

class Reserva {
  constructor(
    id,
    fechareserva,
    fechaentrada,
    fechasalida,
    habitacionid,
    personaid,
    montoreserva
  ) {
    if (
      fechareserva === null ||
      fechaentrada === null ||
      fechasalida === null ||
      habitacionid === null ||
      personaid === null ||
      montoreserva === null
    ) {
      throw new Error("Los campos son obligatorios");
    }

    if (
      typeof habitacionid !== "number" ||
      typeof personaid !== "number"
    )
      throw Error("No se cumple con el tipo de dato esperado");

    this.id = id;
    this.fechareserva = fechareserva;
    this.fechaentrada = fechaentrada;
    this.fechasalida = fechasalida;
    this.habitacionid = habitacionid;
    this.personaid = personaid;
    this.montoreserva = montoreserva;
  }

  static fromJson(json) {
    const {
      id,
      fechareserva,
      fechaentrada,
      fechasalida,
      habitacionid,
      personaid,
      montoreserva,
    } = json;

    return new Reserva(
      id,
      fechareserva,
      fechaentrada,
      fechasalida,
      habitacionid,
      personaid,
      montoreserva
    );
  }

  toJson() {
    return JSON.stringify(this);
  }
}

export default Reserva;
