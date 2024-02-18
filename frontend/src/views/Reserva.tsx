import Table, { TableColumn } from "../components/Table";
import ReservaController from "../controllers/ReservaController";
import IReserva from "../models/IReserva";
import "../assets/css/reserva.css";
import ReservaForm from "../components/Forms/ReservaForm";
import ActionButtons from "../components/ActionButtons";

export default function Reserva() {
  const {
    reservas,
    personas,
    selectedReserva,
    handleReservaFormSubmit,
    handleUpdateReservaFormSubmit,
    handleClickEdit,
    handleClickDelete,
    habitaciones,
    getPersona,
    getHabitacion,
  } = ReservaController();

  const columns: TableColumn<IReserva>[] = [
    { headerName: "id", component: (row) => <span>{row.id}</span> },
    {
      headerName: "Fecha Reserva",
      component: (row) => (
        <span>{new Date(row.fechareserva).toLocaleDateString()}</span>
      ),
    },
    {
      headerName: "Fecha Entrada",
      component: (row) => (
        <span>{new Date(row.fechaentrada).toLocaleDateString()}</span>
      ),
    },
    {
      headerName: "Fecha Salida",
      component: (row) => (
        <span>{new Date(row.fechasalida).toLocaleDateString()}</span>
      ),
    },
    {
      headerName: "Persona",
      component: (row) => (
        <span>{getPersona(row.personaid)?.nombrecompleto ?? "-"}</span>
      ),
    },
    {
      headerName: "Habitacion",
      component: (row) => (
        <span>{getHabitacion(row.habitacionid)?.habitacionnro ?? "-"}</span>
      ),
    },
    {
      headerName: "Monto Reserva",
      component: (row) => <span>{row.montoreserva}</span>,
    },
    {
      headerName: "Acciones",
      component: (row) => (
        console.log(row),
        <ActionButtons
          onClickEdit={handleClickEdit}
          onClickDelete={handleClickDelete}
          row={row}
        />
      ),
    },
  ];

  return (
    <div className="reserva-container">
      <ReservaForm
        submitButtonText={
          selectedReserva ? "Actualizar Reserva" : "Crear Reserva"
        }
        onSubmit={
          selectedReserva
            ? handleUpdateReservaFormSubmit
            : handleReservaFormSubmit
        }
        initialValues={selectedReserva}
        habitaciones={habitaciones}
        personas={personas}
      />
      {reservas.length > 0 && <Table columns={columns} rows={reservas} />}
    </div>
  );
}
