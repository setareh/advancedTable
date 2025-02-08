import React from "react";

export default function AdvancedTable({ columns, data }) {
  return (
    <table className="w-full table-auto border-collapse text-sm overflow-x-auto">
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.id}
              className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900"
            >
              {column.headerName}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="dark:bg-gray-800">
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td
                key={column.id}
                className="border-b border-gray-100 p-4 pl-8 text-gray-500"
              >
                {/* {row[column.field]} */}
                {column.renderCell
                  ? column.renderCell(row[column.field], row)
                  : row[column.field]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
