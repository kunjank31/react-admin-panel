import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { DeleteOutline } from "@mui/icons-material";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "product", headerName: "Product", width: 130 },
  { field: "stock", headerName: "Stock", width: 130 },
  { field: "status", headerName: "Status", width: 90 },
  { field: "transaction", headerName: "Transaction", width: 100 },
  { field: "price", headerName: "Price", width: 100 },
  {
    field: "action",
    headerName: "Action",
    renderCell: (params) => {
      return (
        <>
          <NavLink
            to={"/product/edit/" + params.id}
            className="bg-textApprovedColor text-white leading-none py-2 px-3 rounded-xl"
          >
            Edit
          </NavLink>
          <NavLink to={"/product/delete/" + params.id} className=" text-white ml-4">
            <DeleteOutline className="text-red" />
          </NavLink>
        </>
      );
    },
  },
];

const rows = [
  { id: 1, stock: "Snow", product: "Jon", status: 35 },
  { id: 2, stock: "Lannister", product: "Cersei", status: 42 },
  { id: 3, stock: "Lannister", product: "Jaime", status: 45 },
  { id: 4, stock: "Stark", product: "Arya", status: 16 },
  { id: 5, stock: "Targaryen", product: "Daenerys", status: null },
  { id: 6, stock: "Melisandre", product: null, status: 150 },
  { id: 7, stock: "Clifford", product: "Ferrara", status: 44 },
  { id: 8, stock: "Frances", product: "Rossini", status: 36 },
  { id: 9, stock: "Roxie", product: "Harvey", status: 65 },
];
export default function ProductListTable() {
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
