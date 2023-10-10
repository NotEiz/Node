const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;
const URI = process.env.DB_CONNECTION_URI;
const client = new MongoClient(URI);

app.get("/people", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("ManoDB").collection("people").find().toArray();
    await con.close();
    if (data.length !== 0) {
      res.send(data);
    } else {
      res.status(404).send("data was not found");
    }
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/people", async (req, res) => {
  const { name, surname, age } = req.body;
  try {
    const newPerson = { name, surname, age };
    const con = await client.connect();
    const data = await con
      .db("ManoDB")
      .collection("people")
      .insertOne(newPerson);
    await con.close();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
