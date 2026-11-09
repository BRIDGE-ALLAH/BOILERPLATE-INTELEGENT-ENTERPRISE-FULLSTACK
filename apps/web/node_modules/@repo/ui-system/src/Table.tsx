import React from "react";

interface TableProps<T> {
  columns: Array<{
    key: string;
    header: string;
    render?: (row: T) => React.ReactNode;
    className?: string;
  }>;
  data: T[];
  keyExtractor: (row: T) => string;
  striped?: boolean;
  hoverable?: boolean;
  bordered?: boolean;
  emptyMessage?: string;
  className?: string;
}

export function Table<T>({
  columns,
  data,
  keyExtractor,
  striped = true,
  hoverable = true,
  bordered = true,
  emptyMessage = "No data available",
  className = "",
}: TableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.className || ""}`}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr
              key={keyExtractor(row)}
              className={`
                ${striped && rowIndex % 2 === 1 ? "bg-gray-50" : ""}
                ${hoverable ? "hover:bg-gray-50" : ""}
              `}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={`px-4 py-3 text-sm text-gray-900 ${column.className || ""}`}
                >
                  {column.render ? column.render(row) : (row as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
