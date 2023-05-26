import React from "react";
// import { Link } from "react-router-dom"

export default function Clients({clients, setClients}) {
  // const [clients, setClients] = React.useState([]);

  // React.useEffect(() => {
  //   fetch("http://localhost:8000/clients")
  //     .then((res) => res.json())
  //     .then((data) => setClients(data))
  //     .catch((error) => {
  //       console.error("Error fetching clients:", error);
  //     });
  // }, []);

  function deleteClient(id) {
    fetch(`http://localhost:8000/clients/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          setClients((clients) => clients.filter((client) => client.id !== id));
        } else {
          throw new Error("Failed to delete client");
        }
      })
      .catch((error) => {
        console.error("Error deleting client:", error);
      });
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
