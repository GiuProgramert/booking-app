import PersonaForm from "../components/Forms/PersonaForm";
import Table, { TableColumn } from "../components/Table";
import PersonaController from "../controllers/PersonaController";
import IPersona from "../models/IPersona";
import "../assets/css/persona.css";
import ActionButtons from "../components/ActionButtons";

export default function Persona() {
  const {
    personas,
    selectedPersona,
    handleUpdatePersonaFormSubmit,
    handlePersonaFormSubmit,
    handleClickEdit,
    handleClickDelete,
  } = PersonaController();
  const columns: TableColumn<IPersona>[] = [
    { headerName: "id", component: (row) => <span>{row.id}</span> },
    {
      headerName: "Nombre Completo",
      component: (row) => <span>{row.nombrecompleto}</span>,
    },
    {
      headerName: "Nro Documento",
      component: (row) => <span>{row.nrodocumento}</span>,
    },
    {
      headerName: "Correo",
      component: (row) => <span>{row.correo}</span>,
    },
    {
      headerName: "Telefono",
      component: (row) => <span>{row.telefono}</span>,
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
    <div className="persona-container">
      <PersonaForm
        submitButtonText={selectedPersona ? "Editar Persona" : "Crear Persona"}
        onSubmit={
          selectedPersona
            ? handleUpdatePersonaFormSubmit
            : handlePersonaFormSubmit
        }
        initialValues={selectedPersona}
      />
      {personas.length !== 0 && <Table rows={personas} columns={columns} />}
    </div>
  );
}
