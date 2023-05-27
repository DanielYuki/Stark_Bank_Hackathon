import React from "react";
// import { Link } from "react-router-dom"
import { calculateAmount } from "../functions";
import { generateContract } from "../functions";
import { sendEmail } from "../functions";

export default function Clients({ clients, setClients }) {
  const [emailData, setEmailData] = React.useState({
    amount: "",
    comment: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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

  function aproveClient(client, emailData, event) {
    event.preventDefault();
    // event.stopPropagation();
    sendEmail(client.email, client.name, emailData.comment, emailData.amount);
    // sandbox starkbank

    generateContract(client);
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
        <div className="name-container">
          <p>Name: {client.name}</p>
        </div>
        <div className="value-container">
          <p>
            <span>Wants</span> {calculateAmount(client.ammount)}
          </p>
        </div>
        <div className="value-container">
          <p>
            <span>Nota:</span> {client.nota}
          </p>
        </div>
        <div className="button_type">
          <button
            className="delete-button"
            onClick={(event) => deleteClient(client.id, event)}
          >
            Negate
          </button>
        </div>
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
              <span>Phone:</span> {client.number}
            </p>
            <p>
              <span>Email:</span> {client.email}
            </p>
            <p>
              <span>CNPJ/CPF:</span> {client.CNPJCPF}
            </p>
            <p>
              <span>Number of employees:</span> {client.employees}
            </p>
            <p>
              <span>Age of the company:</span> {client.age}
            </p>
            <p>
              <span>The company segment:</span> {client.segment}
            </p>
            <p>
              <span>CEP:</span> {client.CEP}
            </p>
            <p>
              <span>Nota:</span> {client.nota}
            </p>
            <p>
              <span>Goal:</span> {client.goal}
            </p>
          </div>
          <div className="approve-forms">
            <form>
              <label>
                <span>Amount:</span>
                <input
                  onChange={handleChange}
                  placeholder="XXXX $"
                  type="number"
                  name="amount"
                />
              </label>
              <label>
                <span>Comment:</span>
                <textarea
                  placeholder="Send a message to client"
                  onChange={handleChange}
                  name="comment"
                />
              </label>
              <div className="button_type">
                <button
                  className="aprove-button"
                  onClick={(event) => aproveClient(client, emailData, event)}
                  type="submit"
                >
                  Approve
                </button>
              </div>
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
