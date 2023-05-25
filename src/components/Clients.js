import React from "react";
// import { Link } from "react-router-dom"

export default function Clients() {
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data.clients));
  }, []);

  function deleteClient(id) {
    fetch(`/api/clients/${id}`, { method: "DELETE" });
    setClients((clients) => clients.filter((client) => client.id !== id));
  }

  function aproveClient(id) {
    // sandbox starkbank
    console.log("aproveClient");
  }

  const clientElements = clients.map((client) => (
    <div key={client.id} className="client-tile">
      <div>
        <div className="client-info">
          <h3>{client.name}</h3>
          <p>
            <span>Wants</span> ${client.loan}
          </p>
        </div>
        <button
          className="aprove-button"
          onClick={() => aproveClient(client.id)}
        >
          Aprove
        </button>
        <button
          className="delete-button"
          onClick={() => deleteClient(client.id)}
        >
          Turn off
        </button>
      </div>
    </div>
  ));

  return (
    <div className="client-client-container">
      <h1>Analize our client</h1>
      <div className="client-client">{clientElements}</div>
    </div>
  );
}
