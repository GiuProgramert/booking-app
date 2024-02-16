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
      throw new Error("Fields cannot be null");
    }

    if (
      typeof id != "number" ||
      typeof habitacionid != "number" ||
      typeof personaid != "number" ||
      typeof montoreserva != "number"
    )
      throw Error("Not valid types");

    this.id = id;
    this.fechareserva = setDate(fechareserva);
    this.fechaentrada = setDate(fechaentrada);
    this.fechasalida = setDate(fechasalida);
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
