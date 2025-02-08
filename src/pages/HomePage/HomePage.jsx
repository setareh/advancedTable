import React, { useEffect, useState } from "react";
import AdvancedTable from "../../components/AdvancedTable/AdvancedTable";
import { deleteRequest, getRequest } from "../../utils/apiCall";

const USER_URL = "users";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleDeleteUser = async (id, event) => {
    event.stopPropagation();

    setData(data.filter((row) => row.id !== id));
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
            className="bg-red-700 text-white p-2 rounded"
            onClick={(event) => handleDeleteUser(row.id, event)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await getRequest(USER_URL);
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
    getData();
  }, []);

  return (
    <div className="block mx-auto w-6xl p-6">
      <AdvancedTable columns={columns} data={data} />
    </div>
  );
}
