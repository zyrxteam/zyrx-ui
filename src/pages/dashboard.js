import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import UserStatsTable from "../components/userStatsTable";
//import { Link } from "react-router-dom";
import Gvalues from "../values";

export default function Dashboard() {
  const userDetailStyles = {
    border: "1px solid #1E88E5",
    borderRadius: "16px",
    height: "calc(100% - 46px)",
    padding: "20px",
    margin: "10px",
    color: "#1E88E5",
  };

  const userDataStatsStyles = {
    height: "calc(100% - 46px)",
    padding: "20px",
    margin: "10px",
  };

  const textAreaStyles = {
    marginBottom: "45px",
  };

  const user = {
    name: "John Doe",
    helpingSince: "2000",
    noOfRenews: "10",
  };

  const rechandler=async ()=>{
    const uid=localStorage.getItem("uid")
    console.log(uid)
    if (!uid || uid.length === 0){
      const restid=window.prompt("Enter restid")
      if (!(!restid || restid.length === 0)){
        if((!isNaN(restid))&& parseInt(restid)>=0&& parseInt(restid)<=800){
          localStorage.setItem("restid",restid)
          window.location.assign("/recommendations")
        }
        else{
          const data = await fetch(Gvalues.url+'/rname/'+restid);
          const jdata= await data.json()
          console.log(jdata)
          if(jdata["valid"]){
            localStorage.setItem("restid",jdata["bid"])
            window.location.assign("/recommendations")
          }
          else{
            window.alert("invalid")
          }
        }
      }
      else{
        window.alert("invalid")
      }
    }
    else{
      window.location.assign("/recommendations")
    }
  }

  return (
    <>
      <Grid sx={{ height: "100vh" }} container spacing={2}>
        <Grid sx={{ height: "100%" }} item xs={12} md={4}>
          <div style={userDetailStyles}>
            <Typography variant="h5">User Details</Typography>
            <Avatar
              alt="User Image"
              src="/dude.jpg"
              sx={{ width: 150, height: 150, margin: "0 auto 50px auto" }}
            />
            <TextField
              id="name"
              label="Name"
              value={user.name}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <TextField
              id="helpingSince"
              label="Helping Since"
              value={user.helpingSince}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <TextField
              id="noOfRenews"
              label="Total No of Renews"
              value={user.noOfRenews}
              variant="outlined"
              fullWidth
              style={textAreaStyles}
            />
            <Button fullWidth size="large" variant="contained" onClick={()=>rechandler()}>
                Recommend
            </Button>
          </div>
        </Grid>
        <Grid sx={{ height: "100%" }} item xs={12} md={8}>
          <div style={userDataStatsStyles}>
            <Typography variant="h5" gutterBottom>
              Popular Restaurants in Toronto
            </Typography>
            <UserStatsTable />
          </div>
        </Grid>
      </Grid>
    </>
  );
}
