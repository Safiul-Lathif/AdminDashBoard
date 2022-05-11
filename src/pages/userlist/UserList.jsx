import { React, useState } from "react";
import "./UserList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";

export default function UserList() {
  const [data, setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "user",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="love">
            <img className="lovee" src={params.row.avator} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "statuss", headerName: "status", width: 90 },

    {
      field: "email",
      headerName: "mail",

      width: 130,
    },
    {
      field: "transaction",
      headerName: "transaction",

      width: 90,
    },
    {
      field: "action",
      headerName: "action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userlistedit"> edit </button>
            </Link>
            <DeleteOutline
              className="ss"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={(row) => row.id}
      />
    </div>
  );
}
