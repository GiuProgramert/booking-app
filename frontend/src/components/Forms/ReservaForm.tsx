import { useEffect, useMemo, useState } from "react";
import "../../assets/css/form.css";
import IReserva from "../../models/IReserva";
import IHabitacion from "../../models/IHabitacion";
import IPersona from "../../models/IPersona";
import getDaysBetweenDates from "../../helpers/getDaysBetweenDates";

interface ReservaFormProps {
  initialValues?: IReserva;
  submitButtonText: string;
  habitaciones: IHabitacion[];
  personas: IPersona[];
  onSubmit: (values: IReserva) => void;
}

const defaultState: IReserva = {
  id: 0,
  fechareserva: "",
  fechaentrada: "",
  fechasalida: "",
  habitacionid: 0,
  personaid: 0,
  montoreserva: 0,
};

export default function ReservaForm({
  initialValues,
  submitButtonText,
  habitaciones,
  personas,
  onSubmit,
}: ReservaFormProps) {
  const inicialState = useMemo(
    () =>
      initialValues
        ? initialValues
        : ({
            ...defaultState,
            habitacionid: habitaciones[0]?.id ?? 0,
            personaid: personas[0]?.id ?? 0,
          } as IReserva),
    [initialValues, habitaciones, personas]
  );

  const handleFormStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const id = e.target.id;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const handleFormStateChangeSelect = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = parseInt(e.target.value);
    const id = e.target.id;

    setFormState({
      ...formState,
      [id]: value,
    });
  };

  const [formState, setFormState] = useState<IReserva>({} as IReserva);

  useEffect(() => {
    setFormState(inicialState);
  }, [inicialState]);

  const getMontoReserva = () => {
    if (!formState.fechaentrada || !formState.fechasalida) return 0;

    const diffDays = getDaysBetweenDates(
      formState.fechaentrada,
      formState.fechasalida
    );
    return diffDays * 120000;
  };

  return (
    <form className="form">
      <div className="form-item">
        <label htmlFor="fechareserva">Fecha Reserva</label>
        <input
          id="fechareserva"
          required
          type="date"
          value={formState.fechareserva}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="fechaentrada">Fecha Entrada</label>
        <input
          id="fechaentrada"
          required
          type="date"
          value={formState.fechaentrada}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="fechasalida">Fecha Salida</label>
        <input
          id="fechasalida"
          required
          type="date"
          value={formState.fechasalida}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="habitacionid">Habitacion</label>
        <select
          id="habitacionid"
          required
          value={formState.habitacionid}
          onChange={handleFormStateChangeSelect}
        >
          {habitaciones.length > 0 &&
            habitaciones.map((habitacion) => (
              <option key={habitacion.id} value={habitacion.id}>
                {habitacion.habitacionnro}
              </option>
            ))}
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="personaid">Persona</label>
        <select
          id="personaid"
          required
          value={formState.personaid}
          onChange={handleFormStateChangeSelect}
        >
          {personas.length > 0 &&
            personas.map((persona) => (
              <option key={persona.id} value={persona.id}>
                {persona.nombrecompleto}
              </option>
            ))}
        </select>
      </div>
      <div className="form-item">
        <label htmlFor="montoreserva">Monto Reserva</label>
        <input
          id="montoreserva"
          required
          disabled
          type="number"
          value={getMontoReserva()}
        />
      </div>
      <button
        type="button"
        onClick={() => {
          onSubmit(formState);
          setFormState(defaultState);
        }}
      >
        {submitButtonText}
      </button>
    </form>
  );
}
