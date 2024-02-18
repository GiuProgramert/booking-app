import "../assets/css/table.css";

export interface TableColumn<T> {
  headerName: string;
  component: (row: T) => JSX.Element;
}

interface TableProps<T> {
  columns: TableColumn<T>[];
  rows: T[];
}

export default function Table<T>({ columns, rows }: TableProps<T>) {
  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.headerName}>{column.headerName}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index} className="table-row">
            {columns.map((column) => (
              <td
                key={`row-${column.headerName}-${index}`}
                className="table-column"
              >
                {column.component(row)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
