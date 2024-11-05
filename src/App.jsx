import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Perfil from "./components/Perfil";
import Horario from "./components/Horario";
import Calendario from "./components/Caledario";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Horario" element={<Horario />} />
        <Route path="/Calendario" element={<Calendario />} />
      </Routes>
    </Router>
  );
};

export default App;
