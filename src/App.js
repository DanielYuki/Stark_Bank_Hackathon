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
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    fetch("http://localhost:8000/clients")
        .then((res) => res.json())
        .then((data) => setClients(data))
        .catch((error) => {
          console.error("Error fetching clients:", error);
        });
  }, [clients]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="forms"
            element={<Forms clients={clients} setClients={setClients} />}
          />
          <Route
            path="validation"
            element={<Validation clients={clients} setClients={setClients} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
