import React from "react";
// import { Link } from "react-router-dom"

export default function Clients({ clients, setClients }) {
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

  // UI/UX
  const [dropdowns, setDropdowns] = React.useState([]);

  const toggleDropdown = (clientId) => {
    const updatedDropdowns = [...dropdowns];
    const index = updatedDropdowns.indexOf(clientId);
    if (index > -1) {
      updatedDropdowns.splice(index, 1);
    } else {
      updatedDropdowns.push(clientId);
    }
    setDropdowns(updatedDropdowns);
  };

  const isDropdownOpen = (clientId) => {
    return dropdowns.includes(clientId);
  };

  const clientElements = clients.map((client) => (
    <div key={client.id} className="client-tile">
      <div
        className="client-short-info"
        onClick={() => toggleDropdown(client.id)}
      >
        <h3>Name: {client.name}</h3>
        <p>
          <span>Wants</span> ${client.ammount} to {client.goal}
        </p>
        <button
          className="aprove-button"
          onClick={() => aproveClient(client.id)}
        >
          Approve
        </button>
        <button
          className="delete-button"
          onClick={() => deleteClient(client.id)}
        >
          Turn off
        </button>
        <button
          className="dropdown-button"
          onClick={() => toggleDropdown(client.id)}
        >
          {isDropdownOpen(client.id) ? "^" : "V"}
        </button>
      </div>
      {isDropdownOpen(client.id) && (
        <div className="client-info">
          <div className="client-contact">
            <p>
              <span>Phone:</span> {client.phone}
            </p>
            <p>
              <span>Email:</span> {client.email}
            </p>
          </div>
          <div className="approve-forms">
            <form>
              <label>
                <span>Amount:</span>
                <input type="number" name="amount" />
              </label>
              <label>
                <span>Interest:</span>
                <input type="number" name="interest" />
              </label>
              <label>
                <span>Period:</span>
                <input type="number" name="period" />
              </label>
              <label>
                <span>Monthly payment:</span>
                <input type="number" name="monthly-payment" />
              </label>
              <label>
                <span>Start date:</span>
                <input type="date" name="start-date" />
              </label>
              <label>
                <span>End date:</span>
                <input type="date" name="end-date" />
              </label>
              <label>
                <span>Comment:</span>
                <textarea name="comment" />
              </label>
              <button type="submit">Approve</button>
            </form>
          </div>
        </div>
      )}
    </div>
  ));

  return (
    <div className="client-container">
      <h1>Analize our clients</h1>
      <div className="clients">{clientElements}</div>
    </div>
  );
}
