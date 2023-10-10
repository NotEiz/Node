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

app.get("/movies", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("ManoDB").collection("Movies").find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.post("/movies", async (req, res) => {
  const { title, director, genre, release_year, rating } = req.body;
  try {
    const newMovie = { title, director, genre, release_year, rating };
    const con = await client.connect();
    const data = await con
      .db("ManoDB")
      .collection("Movies")
      .insertOne(newMovie);
    await con.close();
    res.status(201).send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  console.log(`Server ir running http://localhost:${port}`);
});
