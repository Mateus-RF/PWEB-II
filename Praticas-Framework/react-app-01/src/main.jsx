import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroVeiculo from "./pages/Formcadastro";
import DetailsCar from "./pages/detailsCar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cadastro" element={<CadastroVeiculo />} />
        <Route path="/detalhe/:id" element={<DetailsCar />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
