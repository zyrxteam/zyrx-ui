import React,{ useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Gvalues from "../values";

const columns = [
  { field: "bid", headerName: "ID", width: 90 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "address",
    headerName: "Address",
    width: 400,
  },
  {
    field: "stars",
    headerName: "Stars",
    type: "number",
    width: 210,
  },
];

const rows = [
  { id: 1, name: "Snow", address: "Jon", rating: 35 },
  { id: 2, name: "Lannister", address: "Cersei", rating: 42 },
  { id: 3, name: "Lannister", address: "Jaime", rating: 45 },
  { id: 4, name: "Stark", address: "Arya", rating: 16 },
  { id: 5, name: "Targaryen", address: "Daenerys", rating: null },
  { id: 6, name: "Melisandre", address: null, rating: 150 },
  { id: 7, name: "Clifford", address: "Ferrara", rating: 44 },
  { id: 8, name: "Frances", address: "Rossini", rating: 36 },
  { id: 9, name: "Roxie", address: "Harvey", rating: 65 },
];

export default function RecommendationsTable() {
  const [ro,setro]=useState(rows)
  useEffect(()=>{
    const fetchUData = async (uid) => {
      const data = await fetch(Gvalues.url+'/recommend/u/'+uid);
      const jdata= await data.json()
      setro(jdata)
      console.log(jdata)
    }
    const fetchRData = async (rid) => {
      const data = await fetch(Gvalues.url+'/recommend/r/'+rid);
      const jdata= await data.json()
      setro(jdata)
      console.log(jdata)
    }
    const uid=localStorage.getItem("uid")
    console.log(uid)
    if (!uid || uid.length === 0){
      const rid=localStorage.getItem("restid")
      fetchRData(rid)
      // make sure to catch any error
      .catch(console.error);
    }
    else{
      fetchUData(uid)
      // make sure to catch any error
      .catch(console.error);
    }
  },[])
  return (
    <>
      <div
        style={{ height: "600px", width: "calc(100% - 20px)", margin: "10px" }}
      >
        <DataGrid
          rowHeight={50}
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
