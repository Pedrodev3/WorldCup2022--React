import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import FigNacionais from "../pages/FigNacionais";
import FigInternacionais from "../pages/FigInternacionais";

function MainRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/figNacionais" element={<FigNacionais />} />
      <Route path="/figInternacionais" element={<FigInternacionais />} />
    </Routes>
  );
}

export default MainRoutes;
