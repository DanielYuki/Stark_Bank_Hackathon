const express = require("express");

const app = express();
app.use(express.json());

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

// Define your data
const clients = [
  {
    id: "1",
    name: "Modest Explorer",
    email: "",
    estimatedValue: 30,
    currentlyValue: 40,
    loan: 60,
    description: "The longer!",
    confiability: 50,
    warranty: "https.png",
    type: "simple",
    clientId: 2,
  },
  {
    id: "2",
    name: "Beach Bum",
    email: "",
    estimatedValue: 30,
    currentlyValue: 40,
    loan: 80,
    description: "Beach Bum is.",
    confiability: 50,
    warranty: "https.png",
    type: "rugged",
    clientId: 2,
  },
  {
    id: "3",
    name: "Reliable Red",
    email: "",
    estimatedValue: 30,
    currentlyValue: 40,
    loan: 100,
    description: "Reliable .",
    confiability: 50,
    warranty: "https:/d.png",
    type: "luxury",
    clientId: 2,
  },
  // Add more client objects as needed
];

// Define routes
app.get("/clients", (req, res) => {
  res.json(clients);
});

app.get("/clients/:id", (req, res) => {
  const id = req.params.id;
  const client = clients.find((c) => c.id === id);
  if (client) {
    res.json(client);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

app.delete("/clients/:id", (req, res) => {
  const id = req.params.id;
  const index = clients.findIndex((c) => c.id === id);
  if (index !== -1) {
    clients.splice(index, 1);
    res.sendStatus(204);
  } else {
    res.status(404).json({ error: "Client not found" });
  }
});

// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
