import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { DeleteOutline } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "user", headerName: "User", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
  { field: "status", headerName: "Status", width: 90 },
  { field: "transaction", headerName: "Transaction", width: 100 },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => {
      return (
        <>
          <NavLink
            to={"/user/edit/" + params.id}
            className="bg-textApprovedColor text-white leading-none py-2 px-3 rounded-xl"
          >
            Edit
          </NavLink>
          <NavLink to={"delete/" + params.id} className=" text-white ml-4">
            <DeleteOutline className="text-red" />
          </NavLink>
        </>
      );
    },
  },
];

const rows = [
  { id: 1, email: "Snow", user: "Jon", status: 35 },
  { id: 2, email: "Lannister", user: "Cersei", status: 42 },
  { id: 3, email: "Lannister", user: "Jaime", status: 45 },
  { id: 4, email: "Stark", user: "Arya", status: 16 },
  { id: 5, email: "Targaryen", user: "Daenerys", status: null },
  { id: 6, email: "Melisandre", user: null, status: 150 },
  { id: 7, email: "Clifford", user: "Ferrara", status: 44 },
  { id: 8, email: "Frances", user: "Rossini", status: 36 },
  { id: 9, email: "Roxie", user: "Harvey", status: 65 },
];
export default function UserListTable() {
  return (
    <>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </>
  );
}
