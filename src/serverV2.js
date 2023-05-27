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

let privateKey, publicKey;

// [privateKey, publicKey] = starkbank.key.create("./startkbankKey.pem");

// console.log(privateKey)
// console.log(publicKey)

let privateKeyContent = `
-----BEGIN EC PRIVATE KEY-----

TO RUN THIS CODE, PLEASE PUT YOUR PRIVATE KEY

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
  starkbank.user = project
  const client = req.body
  try {
    let transactions = await starkbank.transaction.create([
      {
        amount: Number(client.amount),
        receiverId: '4849799949975552',
        description: client.comment,
        externalId: String(client.externalId),
        tags: ['sugou', 'insano']
      }
    ]);

    res.status(200).json(transactions); // Send the transactions as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// dummy data
const clients = [
  {
    name: "Unblivion",
    employees: "27",
    email: "unblivion@gmail.com",
    number: "40028922",
    age: "0.25",
    segment: "0.72",
    ammount: "0.25",
    term: "1.00",
    CNPJCPF: "40028922",
    streetline1: "",
    streetline2: "",
    district: "",
    city: "",
    CEP: "",
    UF: "",
    goal: "Do something",
    nota: 4.54,
    id: "1f0a70b7-d319-481e-ba4e-114035d08bc1",
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
