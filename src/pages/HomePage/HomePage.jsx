import React, { useEffect, useState } from "react";
import AdvancedTable from "../../components/AdvancedTable/AdvancedTable";
import { getRequest } from "../../utils/apiCall";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
      renderCell: () => (
        <div>
          <button
            className="bg-yellow-300 text-black p-2 rounded"
            onClick={(event) => handleEdit(params.id, event)}
            style={{ marginRight: 8 }}
          >
            {/* <Edit /> */}
            Edit
          </button>
          <button
            className="bg-red-700 text-white p-2 rounded"
            onClick={(event) => handleDelete(params.id, event)}
          >
            {/* <Delete /> */}
            Delete
          </button>
        </div>
      ),
    },
  ];

  const getData = async () => {
    setIsLoading(true);

    try {
      const response = await getRequest("users");
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
