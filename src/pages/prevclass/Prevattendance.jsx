import "./datatable.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import { DataGrid } from "@mui/x-data-grid";
import Navbar from "../../components/navbar/Navbar"
import { userColumns, userRows } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  console.log(data)
  const handleabsent = (id) => {
    setData(item=>{
      item[id-1].ispresent=false
      return[
        ...item,
      ]
    });
  };
  const handlepresent = (id) => {
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
        if(userRows[params.row.id-1].ispresent)
          {
            return (
                <div className="cellAction">
                <div
                className="viewButton"
                onClick={() => handlepresent(params.row.id)}
                >
                Present
                </div>
                </div>
            )
          }
        else
        {
          return(
              <div className="cellAction">
              <div
              className="deleteButton"
              >
              Absent
              </div>
              </div>
            )
        } 
      },
    },
  ];
  return (
    <div className="datatable">
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
