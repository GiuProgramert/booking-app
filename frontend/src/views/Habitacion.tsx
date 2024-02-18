import HabitacionForm from "../components/Forms/HabitacionForm";
import Table, { TableColumn } from "../components/Table";
import HabitacionController from "../controllers/HabitacionController";
import IHabitacion from "../models/IHabitacion";
import "../assets/css/habitacion.css";

interface ActionButtonsProps {
  row: IHabitacion;
  onClickEdit: (row: IHabitacion) => void;
  onClickDelete: (id: number) => void;
}

function ActionButtons({
  row,
  onClickEdit,
  onClickDelete,
}: ActionButtonsProps) {
  return (
    <div className="habitacion-acciones">
      <button
        className="habitacion-acciones__button edit"
        onClick={() => onClickEdit(row)}
      >
        Editar
      </button>
      <button
        className="habitacion-acciones__button delete"
        onClick={() => onClickDelete(row.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default function Habitacion() {
  const {
    habitaciones,
    handleUpdateHabitacionFormSubmit,
    handleHabitacionFormSubmit,
    selectedHabitacion,
    handleClickEdit,
    handleClickDelete,
  } = HabitacionController();
  const columns: TableColumn<IHabitacion>[] = [
    { headerName: "id", component: (row) => <span>{row.id}</span> },
    {
      headerName: "Piso",
      component: (row) => <span>{row.habitacionpiso}</span>,
    },
    { headerName: "Nro", component: (row) => <span>{row.habitacionnro}</span> },
    { headerName: "Camas", component: (row) => <span>{row.cantcamas}</span> },
    {
      headerName: "TV",
      component: (row) => <span>{row.tienetelevision ? "Sí" : "No"}</span>,
    },
    {
      headerName: "Frigobar",
      component: (row) => <span>{row.tienefrigobar ? "Sí" : "No"}</span>,
    },
    {
      headerName: "Acciones",
      component: (row) => (
        <ActionButtons
          row={row}
          onClickEdit={handleClickEdit}
          onClickDelete={handleClickDelete}
        />
      ),
    },
  ];

  return (
    <div className="habitacion-container">
      <HabitacionForm
        submitButtonText={
          selectedHabitacion ? "Editar habitacion" : "Crear habitacion"
        }
        onSubmit={
          selectedHabitacion
            ? handleUpdateHabitacionFormSubmit
            : handleHabitacionFormSubmit
        }
        initialValues={selectedHabitacion}
      />
      {habitaciones.length !== 0 && (
        <Table rows={habitaciones} columns={columns} />
      )}
    </div>
  );
}
