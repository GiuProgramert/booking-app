import { useEffect, useState } from "react";
import IHabitacion from "../../models/IHabitacion";
import "../../assets/css/form.css";

interface HabitacionFormProps {
  initialValues?: IHabitacion;
  submitButtonText: string;
  onSubmit: (values: IHabitacion) => void;
}

const defaultState: IHabitacion = {
  id: 0,
  habitacionpiso: 0,
  habitacionnro: 0,
  cantcamas: 0,
  tienetelevision: 0,
  tienefrigobar: 0,
};

export default function HabitacionForm({
  initialValues,
  submitButtonText,
  onSubmit,
}: HabitacionFormProps) {
  const inicialState = initialValues ? initialValues : defaultState;
  const handleFormStateChange =
    (isInt = false) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "checkbox"
          ? e.target.checked
            ? 1
            : 0
          : isInt
          ? Number.isNaN(parseInt(e.target.value))
            ? 0
            : parseInt(e.target.value)
          : e.target.value;
      const id = e.target.id;

      setFormState({
        ...formState,
        [id]: value,
      });
    };

  const [formState, setFormState] = useState<IHabitacion>({} as IHabitacion);
  
  useEffect(() => {
    setFormState(inicialState);
  }, [inicialState]);

  return (
    <form className="form">
      <div className="form-item">
        <label htmlFor="habitacionpiso">Piso</label>
        <input
          id="habitacionpiso"
          type="number"
          value={formState.habitacionpiso}
          onChange={handleFormStateChange(true)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="habitacionnro">Número</label>
        <input
          id="habitacionnro"
          type="number"
          value={formState.habitacionnro}
          onChange={handleFormStateChange(true)}
        />
      </div>

      <div className="form-item">
        <label htmlFor="cantcamas">Cantidad de camas</label>
        <input
          id="cantcamas"
          type="number"
          value={formState.cantcamas}
          onChange={handleFormStateChange(true)}
        />
      </div>
      <div className="form-item">
        <label htmlFor="tienetelevision">Tiene televisión</label>
        <input
          id="tienetelevision"
          type="checkbox"
          checked={formState.tienetelevision === 1}
          onChange={handleFormStateChange()}
        />
      </div>
      <div className="form-item">
        <label htmlFor="tienefrigobar">Tiene frigobar</label>
        <input
          id="tienefrigobar"
          type="checkbox"
          checked={formState.tienefrigobar === 1}
          onChange={handleFormStateChange()}
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
