// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Forms from "./pages/Forms";
import Validation from "./pages/Validation";
import Layout from "./components/Layout";

// import "./server"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="forms" element={<Forms />} />
          <Route path="validation" element={<Validation />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
