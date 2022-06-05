import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Login() {
  const [uid,setuid]= useState("")

  useEffect(()=>{
    localStorage.setItem("uid","")
  },[])

  const userOnChange=(e)=>{
    setuid(e.target.value)
  }

  const butonclick=()=>{
    console.log(localStorage.getItem("uid"))
    localStorage.setItem("uid",uid)
    console.log(localStorage.getItem("uid"))
    window.location.assign('/dashboard');
  }


  const formStyles = {
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const textAreaStyles = {
    marginBottom: "12px",
    width: "300px",
  };

  const buttonStyles = {
    width: "300px",
  };

  return (
    <>
      <div style={formStyles}>
        <Typography variant="h4" gutterBottom component="div">
          Login
        </Typography>
        <TextField
          autoFocus
          id="username"
          label="Username"
          variant="outlined"
          value={uid}
          style={textAreaStyles}
          onChange={userOnChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          variant="outlined"
          style={textAreaStyles}
        />
        <Button
          type="button"
          variant="contained"
          size="large"
          style={buttonStyles}
          onClick={butonclick}
        >
          Login
        </Button>
      </div>
    </>
  );
}
