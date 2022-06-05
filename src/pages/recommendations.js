import React from "react";
import Typography from "@mui/material/Typography";
import RecommendationsTable from "../components/recommendationsTable";

export default function Recommendations() {
  return (
    <>
      <Typography variant="h5" gutterBottom component="div">
        List of Recommendations
      </Typography>
      <RecommendationsTable />
    </>
  );
}
