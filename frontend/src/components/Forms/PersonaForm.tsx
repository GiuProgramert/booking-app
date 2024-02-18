import { useEffect, useState } from "react";
import "../../assets/css/form.css";
import IPersona from "../../models/IPersona";

interface PersonaFormProps {
  initialValues?: IPersona;
  submitButtonText: string;
  onSubmit: (values: IPersona) => void;
}

const defaultState: IPersona = {
  id: 0,
  nombrecompleto: "",
  nrodocumento: "",
  correo: "",
  telefono: "",
};

export default function PersonaForm({
  initialValues,
  submitButtonText,
  onSubmit,
}: PersonaFormProps) {
  const inicialState = initialValues ? initialValues : defaultState;
  const handleFormStateChange =
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      const id = e.target.id;

      setFormState({
        ...formState,
        [id]: value,
      });
    };

  const [formState, setFormState] = useState<IPersona>({} as IPersona);
  
  useEffect(() => {
    setFormState(inicialState);
  }, [inicialState]);

  return (
    <form className="form">
      <div className="form-item">
        <label htmlFor="nombrecompleto">Nombre Completo</label>
        <input
          id="nombrecompleto"
          required
          type="text"
          value={formState.nombrecompleto}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="nrodocumento">Nro Documento</label>
        <input
          id="nrodocumento"
          required
          type="text"
          value={formState.nrodocumento}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          type="email"
          value={formState.correo}
          onChange={handleFormStateChange}
        />
      </div>
      <div className="form-item">
        <label htmlFor="telefono">Teléfono</label>
        <input
          id="telefono"
          type="text"
          value={formState.telefono}
          onChange={handleFormStateChange}
        />
      </div>
      <button
        type="button"
        onClick={() => onSubmit(formState)}
      >
        {submitButtonText}
      </button>
    </form>
  );
}