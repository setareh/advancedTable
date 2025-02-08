import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";

export default function AdvancedTable({
  columns,
  data,
  currentPage,
  itemsPerPage,
  onPageChange,
  isApiPagination,
  itemsPerPageOptions,
  setItemsPerPage,
}) {
  const [searchQuery, setSearchQuery] = useState("");

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = isApiPagination
    ? data
    : data.slice(startIndex, startIndex + itemsPerPage);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = currentData.filter(
    (row) =>
      row.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.last_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div>
        <label className="mr-2">Search:</label>
        <input
          className="shadow appearance-none border rounded py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline mb-6"
          type="search"
          onChange={(e) => handleSearchChange(e)}
          value={searchQuery}
          placeholder="Search ..."
        />
      </div>
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
          {filteredData.map((row, rowIndex) => (
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
      <div className="flex flex-row justify-between mt-2 items-center">
        <Pagination
          totalItems={data.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={onPageChange}
          isApiPagination={isApiPagination}
        />
        {!isApiPagination && (
          <label>
            per page:{" "}
            <select
              onChange={(e) => setItemsPerPage(e)}
              className="py-1 px-3 border-gray-400"
            >
              {itemsPerPageOptions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        )}
      </div>
    </div>
  );
}
