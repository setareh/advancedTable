import React from "react";
import Pagination from "../Pagination/Pagination";

export default function AdvancedTable({
  columns,
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
}) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <table className="w-full table-auto border-collapse text-sm overflow-x-auto">
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.field}
                className="border-b border-gray-200 p-4 pt-0 pb-3 pl-8 text-left font-semibold text-gray-900"
              >
                {column.headerName}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="dark:bg-gray-800">
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${rowIndex % 2 == 0 ? "" : "bg-gray-50"}`}
            >
              {columns.map((column) => (
                <td
                  key={column.field}
                  className="border-b border-gray-100 p-4 pl-8 text-gray-500"
                >
                  {column.renderCell
                    ? column.renderCell(row[column.field], row)
                    : row[column.field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
