import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Navbars from "./Layouts/Navbars";
import CheckOut from "./Pages/CheckOut";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbars/>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/CheckOut" element={<CheckOut />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
