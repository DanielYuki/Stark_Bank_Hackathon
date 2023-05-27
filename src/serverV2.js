const express = require("express");
const starkbank = require("starkbank");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers"
  );
  next();
});

// let privateKey, publicKey;

// [privateKey, publicKey] = starkbank.key.create("./startkbankKey.pem");

// console.log(privateKey)
// console.log(publicKey)

let privateKeyContent = `
-----BEGIN EC PRIVATE KEY-----

-----END EC PRIVATE KEY-----

-----BEGIN PUBLIC KEY-----
MFYwEAYHKoZIzj0CAQYFK4EEAAoDQgAE2Ev9LkU6x3Y4Z514pfTSywXGF8yB8cWn
soxAZMM7f8gjBUTyyvxtaKJez4QKzyyE1vnL32vAimA5iADcie2ydw==
-----END PUBLIC KEY-----
`;

let project = new starkbank.Project({
  environment: "sandbox",
  id: "6009122000470016",
  privateKey: privateKeyContent,
});

app.get("/starkUser", (req, res) => {
  starkbank.user = project; // or organization

  (async () => {
    let balance = await starkbank.balance.get();
    console.log(balance);
  })();
  // res.json(starkbank.balance);
});

app.post("/v2/transaction", async (req, res) => {
  starkbank.user = project;
  const client = req.body;
  try {
    let transactions = await starkbank.transaction.create([
      {
        amount: Number(client.amount),
        receiverId: "4849799949975552",
        description: client.comment,
        externalId: String(client.externalId),
        tags: ["sugou", "insano"],
      },
    ]);

    res.status(200).json(transactions); // Send the transactions as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

// dummy data
const clients = [
  {
    name: "Hackathon",
    employees: "3",
    email: "unblivion@gmail.com",
    number: "2740028922",
    age: "0.15",
    segment: "0.90",
    ammount: "0.10",
    term: "0.30",
    CNPJCPF: "12345432",
    streetline1: "Rua H8C",
    streetline2: "",
    district: "A",
    city: "B",
    CEP: "12345678",
    UF: "SP",
    goal: "Só quero torar insano",
    nota: "1.81",
    id: "4a8df5c6-b76d-45f1-ac45-af16431a815e",
    starkId: "4849799949975552",
  },
  {
    name: "linguica",
    employees: "123",
    email: "vroffice21@gmail.com",
    number: "666666",
    age: "0.75",
    segment: "0.81",
    ammount: "0.10",
    term: "0.50",
    CNPJCPF: "220198740",
    streetline1: "",
    streetline2: "",
    district: "",
    city: "",
    CEP: "",
    UF: "",
    goal: "liguicao",
    nota: 2.7,
    id: "072bae9f-ac13-4640-bf3d-2afa2e4a81c4",
  },
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

app.post("/addClients", (req, res) => {
  const newItem = req.body; // The new item sent from the client

  clients.push(newItem);
  res.status(201).json(newItem);
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
