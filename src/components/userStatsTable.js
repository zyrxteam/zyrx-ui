import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Gvalues from "../values";

const columns = [
  { field: "bid", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
  },
  {
    field: "address",
    headerName: "Address",
    width: 350,
  },
  {
    field: "stars",
    headerName: "Stars",
    width: 110,
  },
];

const rows = [
  { id: 1, name: "Snow", address: "Jon", rating: 35 }
];

export default function UserStatsTable() {
  const [ro,setro]=useState(rows)
  useEffect(()=>{
    const fetchData = async () => {
      const data = await fetch(Gvalues.url+'/popular');
      const jdata= await data.json()
      setro(jdata)
      console.log(jdata)
    }
  
    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  },[])
  return (
    <>
      <div style={{ height: "97%", width: "100%" }}>
        <DataGrid
          rowHeight={25}
          rows={ro}
          columns={columns}
          pageSize={25}
          rowsPerPageOptions={[25]}
          disableSelectionOnClick
        />
      </div>
    </>
  );
}
