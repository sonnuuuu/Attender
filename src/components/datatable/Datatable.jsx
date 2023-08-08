import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  console.log(data)
  const handleabsent = (id) => {
    document.getElementById(id).style.backgroundColor="red"
    document.getElementById(id).style.color="white"
    document.getElementById(id+100).style.backgroundColor="white"
    document.getElementById(id+100).style.color="blue"
    setData(item=>{
      item[id-1].ispresent=false
      return[
        ...item,
      ]
    });
  };
  const handlepresent = (id) => {
    document.getElementById(id+100).style.backgroundColor="Blue"
    document.getElementById(id+100).style.color="white"
    document.getElementById(id).style.backgroundColor="white"
    document.getElementById(id).style.color="red"
    setData(item=>{
      item[id-1].ispresent=true
      return[
        ...item,
      ]
    });
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Attendance",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <div
              className="deleteButton"
              onClick={() => handleabsent(params.row.id)}
              id={params.row.id}
            >
              Absent
            </div>
            <div
              className="viewButton"
              onClick={() => handlepresent(params.row.id)}
              id={params.row.id+100}
            >
              Present
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
