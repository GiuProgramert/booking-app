class Habitacion {
  constructor(
    id,
    habitacionpiso,
    habitacionnro,
    cantcamas,
    tienetelevision,
    tienefrigobar
  ) {
    this.id = id;
    this.habitacionpiso = habitacionpiso;
    this.habitacionnro = habitacionnro;
    this.cantcamas = cantcamas;
    this.tienetelevision = tienetelevision;
    this.tienefrigobar = tienefrigobar;
  }

  static fromJson(json) {
    const {
      id,
      habitacionpiso,
      habitacionnro,
      cantcamas,
      tienetelevision,
      tienefrigobar,
    } = json;

    if (
      !id ||
      !habitacionpiso ||
      !habitacionnro ||
      !cantcamas ||
      tienetelevision === undefined ||
      tienefrigobar === undefined
    ) {
      throw Error("All fields must be setted");
    }

    return new Habitacion(
      id,
      habitacionpiso,
      habitacionnro,
      cantcamas,
      tienetelevision,
      tienefrigobar
    );
  }

  toJson() {
    return JSON.stringify({
      id: this.id,
      habitacionpiso: this.habitacionpiso,
      habitacionnro: this.habitacionnro,
      cantcamas: this.cantcamas,
      tienetelevision: this.tienetelevision,
      tienefrigobar: this.tienefrigobar,
    });
  }
}

export default Habitacion
