import { Routes, Route } from "react-router-dom";
//import "./App.css";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Recommendations from "./pages/recommendations";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/recommendations" element={<Recommendations />} />
      </Routes>
    </>
  );
}

export default App;
