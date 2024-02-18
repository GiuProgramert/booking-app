import Table, { TableColumn } from "../components/Table";
import PersonaController from "../controllers/PersonaController";
import IPersona from "../models/IPersona";

export default function Persona() {
  const { personas } = PersonaController();
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
  ];

  return <div>
  {personas.length !== 0 && (
    <Table rows={personas} columns={columns} />
  )}
</div>;
}
