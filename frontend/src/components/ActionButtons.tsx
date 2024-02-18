import "../assets/css/actions.css";

interface ActionButtonsProps<T extends { id: number }> {
  row: T;
  onClickEdit: (row: T) => void;
  onClickDelete: (id: number) => void;
}

export default function ActionButtons<T extends { id: number }>({
  row,
  onClickEdit,
  onClickDelete,
}: ActionButtonsProps<T>) {
  return (
    <div className="actions">
      <button className="actions__button edit" onClick={() => onClickEdit(row)}>
        Editar
      </button>
      <button
        className="actions__button delete"
        onClick={() => onClickDelete(row.id)}
      >
        Eliminar
      </button>
    </div>
  );
}
