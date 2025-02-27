import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Seker from "../src/pages/Seker";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Seker />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;