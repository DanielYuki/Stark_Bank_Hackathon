import React from "react";
// import { Link } from "react-router-dom"
import { calculateAmount } from "../functions";
import { generateContract } from "../functions";

export default function Clients({ clients, setClients }) {

  function deleteClient(id, event) {
    event.stopPropagation();
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

  function aproveClient(client, event) {
    event.preventDefault();
    event.stopPropagation();

    // sandbox starkbank
    // generateContract(client);
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
          <span>Wants</span> {calculateAmount(client.ammount)} to {client.goal}
        </p>
        <button
          className="delete-button"
          onClick={(event) => deleteClient(client.id, event)}
        >
          Refuse
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
                <span>Comment:</span>
                <textarea name="comment" />
              </label>
              <button
                className="aprove-button"
                type="submit"
                onClick={(event) => aproveClient(client, event)}
              >
                Approve
              </button>
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
