import React, { useEffect, useState } from "react";
import AdvancedTable from "../../components/AdvancedTable/AdvancedTable";
import { getRequest } from "../../utils/apiCall";

const USER_URL = "users";

export default function WithoutApi({ isApiPagination }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // const itemsPerPage = 5;
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const itemsPerPageOptions = [5, 10, 20, 50];

  const handleDeleteUser = async (id, event) => {
    event.stopPropagation();

    setData(data.filter((row) => row.id !== id));
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "avatar",
      headerName: "Avatar",
      renderCell: (value) => <img className="rounded" src={`${value}`} />,
    },
    { field: "first_name", headerName: "First Name" },
    { field: "last_name", headerName: "Last Name" },
    { field: "email", headerName: "Email" },
    {
      field: "actions",
      headerName: "Actions",
      // sortable: false,
      renderCell: (value, row) => (
        <div>
          <button
            className="bg-red-700 text-white p-2 rounded cursor-pointer"
            onClick={(event) => handleDeleteUser(row.id, event)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const getData = async (page) => {
    setIsLoading(true);

    try {
      const response = await getRequest(`${USER_URL}?per_page=100`);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log("error:", error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData(currentPage);
  }, [currentPage]);

  return (
    <div className="block mx-auto w-6xl p-6">
      {isLoading ? (
        <p>Loading ... </p>
      ) : (
        <AdvancedTable
          columns={columns}
          data={data}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          setItemsPerPage={handleItemsPerPageChange}
          onPageChange={handlePageChange}
          isApiPagination={isApiPagination}
          itemsPerPageOptions={itemsPerPageOptions}
        />
      )}
    </div>
  );
}
